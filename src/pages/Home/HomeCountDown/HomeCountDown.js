import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import RegularBtn from '../../Share/RegularBtn/RegularBtn';

const HomeCountDown = () => {
    // declear countDown state
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();
    // function for countdown 
    const startTimer = () => {
        const countDownDate = new Date('August 30, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval)
            } else {
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds)
            }
        }, 1000)
    }
    // declear useEffect for one time call startTimer function
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval)
        }
    }, [])

    // distuctoring rgularbutton
    const { RegularButton } = RegularBtn();


    return (
        <Box sx={{ mt: { lg: '-100px', sm: '-50px', xs: '-50px', md: '-90px' } }}>
            <Container sx={{ pb: '100px' }}>
                <Grid container sx={{
                    borderTopRightRadius: '15px', borderBottomRightRadius: '15px',
                    background: '#fff', p: '60px 0', alignItems: 'center', position: 'relative',
                    '&::before': {
                        position: 'absolute',
                        content: '""',
                        top: '0',
                        right: '100%',
                        width: '500%',
                        height: '100%',
                        display: 'block !important',
                        background: '#fff'
                    }
                }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={{ display: 'flex', pr: { lg: '50px' }, mb: { sm: '25px', xs: '25px' } }}>
                            <Box sx={{ textAlign: 'center', width: '33.33%', border: { lg: '4px solid #ff3d55', sm: '1px solid #ff3d55', xs: '1px solid #ff3d55' }, mr: { lg: '20px' }, m: { sm: '0 3px', xs: '0 3px' }, mb: '25px', borderRadius: '4px', py: '20px' }}>
                                <Typography variant="h3" sx={{ color: '#0c3356', fontSize: { lg: '40px', sm: '20px', xs: '20px', md: '35px' }, lineHeight: '0.9' }}>{timeDays}</Typography>
                                <Typography sx={{ color: '#0c3356', fontSize: { lg: '16px', sm: '13px', xs: '13px', md: '16px' }, fontWeight: '600' }}>Days</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center', width: '33.33%', border: { lg: '4px solid #ff3d55', sm: '1px solid #ff3d55', xs: '1px solid #ff3d55' }, mr: { lg: '20px' }, m: { sm: '0 3px', xs: '0 3px' }, mb: '25px', borderRadius: '4px', py: '20px' }}>
                                <Typography variant="h3" sx={{ color: '#0c3356', fontSize: { lg: '40px', sm: '20px', xs: '20px', md: '35px' }, lineHeight: '0.9' }}>{timeHours}</Typography>
                                <Typography sx={{ color: '#0c3356', fontSize: { lg: '16px', sm: '13px', xs: '13px', md: '16px' }, fontWeight: '600' }}>Hours</Typography>
                            </Box>

                            <Box sx={{ textAlign: 'center', width: '33.33%', border: { lg: '4px solid #ff3d55', sm: '1px solid #ff3d55', xs: '1px solid #ff3d55' }, mr: { lg: '20px' }, m: { sm: '0 3px', xs: '0 3px' }, mb: '25px', borderRadius: '4px', py: '20px' }}>
                                <Typography variant="h3" sx={{ color: '#0c3356', fontSize: { lg: '40px', sm: '20px', xs: '20px', md: '35px' }, lineHeight: '0.9' }}>{timeMinutes}</Typography>
                                <Typography sx={{ color: '#0c3356', fontSize: { lg: '16px', sm: '13px', xs: '13px', md: '16px' }, fontWeight: '600' }}>Minutes</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center', width: '33.33%', border: { lg: '4px solid #ff3d55', sm: '1px solid #ff3d55', xs: '1px solid #ff3d55' }, mr: { lg: '20px' }, m: { sm: '0 3px', xs: '0 3px' }, mb: '25px', borderRadius: '4px', py: '20px' }}>
                                <Typography variant="h3" sx={{ color: '#0c3356', fontSize: { lg: '40px', sm: '20px', xs: '20px', md: '35px' }, lineHeight: '0.9' }}>{timeSeconds}</Typography>
                                <Typography sx={{ color: '#0c3356', fontSize: { lg: '16px', sm: '13px', xs: '13px', md: '16px' }, fontWeight: '600' }}>Seconds</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={{
                            pl: { lg: '100px', md: '80px' }, position: 'relative',
                            '&::before': {
                                lg: {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '50px',
                                    width: '1px',
                                    height: '130%',
                                    background: "#828c96",
                                    opacity: '0.3'
                                },
                                md: {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '50px',
                                    width: '1px',
                                    height: '130%',
                                    background: "#828c96",
                                    opacity: '0.3'
                                }
                            }
                        }}>
                            <Typography variant="h4" sx={{ color: '#283d58', fontSize: '30px' }}>Hurry Up</Typography>
                            <Typography sx={{ color: '#828c96', fontSize: '15px', m: '5px 0 30px' }}>The Last Date Of Registration is August 30, 2023.</Typography>
                            <RegularButton>Buy ticket</RegularButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeCountDown;