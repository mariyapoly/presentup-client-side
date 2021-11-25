import { Container, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import sliderBg from '../../../images/mainslider-image-9.jpg';
import RegularBtn from '../../Share/RegularBtn/RegularBtn';

const HomeSlider = () => {

    const theme = useTheme();
    const { RegularButton } = RegularBtn();
    const useStyle = makeStyles({
        slider: {
            background: `url(${sliderBg}) no-repeat center`,
            backgroundSize: 'cover',
            padding: '310px 0 200px',
            [theme.breakpoints.down('md')]: {
                padding: '150px 0 100px',
            },
        },
        sliderTitle: {
            [theme.breakpoints.down('sm')]: {
                width: 'auto !important'
            },
        }
    })

    const { slider, sliderTitle } = useStyle();
    return (
        <Box className={slider}>
            <Container>
                <Typography className={sliderTitle} variant="h2" sx={{ fontFamily: `'Open Sans', sans-serif !important`, fontSize: { lg: '65px', xs: '32px', md: '56px', sm: '50px' }, fontWeight: '700', color: 'rgb(1, 37, 70)', width: '500px', lineHeight: { lg: '70px', xs: '38px', md: '56px', sm: '50px' } }}>We <Typography variant="span" sx={{ color: '#ff3d55 ' }}>Plan</Typography> Your <Typography variant="span" sx={{ color: '#ff3d55 ' }}>Event</Typography> from <Typography variant="span" sx={{ color: '#ff3d55 ' }}>Start</Typography>  to Finish</Typography>

                <Typography className={sliderTitle} sx={{ color: 'rgb(1, 37, 70)', fontSize: { lg: '20px', xs: '16px', md: '20px', sm: '20px' }, lineHeight: { lg: '32px', xs: '24px', md: '32px', sm: '32px' }, fontWeight: '400', width: '550px', margin: { lg: '15px 0 50px', xs: '10px 0 20px' } }}>23 Years of Planning Large Successful Events for Fortune 500 Companies throughout the United States </Typography>
                <RegularButton>get a quote</RegularButton>
            </Container>
        </Box>
    );
};

export default HomeSlider;