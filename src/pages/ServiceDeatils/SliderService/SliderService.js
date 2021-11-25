
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import SlideService from '../SlideService/SlideService';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';

const SliderService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/allServices')
            .then(function (response) {
                setServices(response.data);
            })
    }, [])

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBackIosIcon sx={{ ml: '10px' }} /> : <ArrowForwardIosIcon />
        return (
            <Button sx={{ color: '#ff3d55', padding: '0', minWidth: '40px', height: '40px', textAlign: 'center', mt: '130px' }} onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        )
    }

    const useStyle = makeStyles({
        serviceSlider: {
            marginBottom: '30px',
            '& .sc-iCfMLu.gZZBOx.rec.rec-pagination': {
                display: 'none',
            }
        }
    })
    const { serviceSlider } = useStyle();
    return (
        <Box className={serviceSlider}>
            <Typography sx={{ color: '#283d58', fontSize: '28px', fontWeight: '700', lineHeight: '38px', m: '50px 0 25px' }}>Our Service</Typography>
            <Carousel itemsToScroll={1} itemsToShow={2} renderArrow={myArrow}>
                {
                    services.map(service => <SlideService
                        key={service._id}
                        service={service}>
                    </SlideService>)
                }
            </Carousel >
        </Box>
    );
};

export default SliderService;