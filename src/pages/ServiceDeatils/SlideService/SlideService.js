import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router';

const SlideService = ({ service }) => {

    const { img, serviceName, _id } = service || {};

    const useStyle = makeStyles({
        singleService: {
            "&:hover": {
                cursor: 'pointer',
                "& $sevicesTitle": {
                    background: '#ff3d55',
                    color: '#fff'
                }
            }
        },
        sevicesTitle: {
            background: '#fff',
            color: '#273f5b',
            fontSize: '18px !important',
            fontWeight: '700 !important',
            padding: '17px 25px 12px',
            textAlign: 'center',
            width: '150px',
            margin: '-30px auto 10px !important',
            zIndex: '999',
            position: 'relative',
            borderRadius: '3px',
            transition: 'all linear 0.3s',
            boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
        }

    })
    const { sevicesTitle, singleService } = useStyle();
    const nagivation = useNavigate();
    const handleService = () => {
        nagivation(`/singleService/${_id}`)
    }

    return (
        <Box sx={{ p: '0 15px' }}>
            <Box onClick={handleService} className={singleService}>
                <img src={img} alt="" />
                <Typography className={sevicesTitle}>{serviceName}</Typography>
            </Box>
        </Box>
    );
};


export default SlideService;