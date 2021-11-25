import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aboutImg from '../../../images/about-bg.png';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import RegularBtn from '../../Share/RegularBtn/RegularBtn';

const HomeAbout = () => {

    const { RegularButton } = RegularBtn();

    return (
        <Box sx={{ bgcolor: '#f2f2f2', pt: { lg: '280px', sm: '390px', xs: '390px', md: '240px' }, mt: { lg: '-266px', xs: '-431px', sm: '-431px', md: '-276px' } }}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item sm={12} xs={12} md={8} lg={8} sx={{ mb: { lg: '100px', md: '80px' } }}>
                        <Typography sx={{ color: 'rgba(0, 0, 0, .06)', fontSize: { lg: '50px', md: '50px', sm: '30px', xs: '29px' }, fontWeight: '700', textTransform: 'uppercase' }}>WELCOME PRESENT</Typography>
                        <Typography sx={{ mt: { lg: "-45px", md: "-45px", sm: "-26px", xs: '-26px' }, color: '#283d58', fontSize: { lg: '48px', md: '48px', sm: '30px', xs: '30px' }, mb: '25px' }} variant='h3'>We’re The Largest Events Company</Typography>
                        <Typography sx={{ color: '#57616b', fontSize: '16px', width: { lg: '510px' }, lineHeight: '25px', mb: '35px' }}>With our passion, knowledge, creative flair and inspiration, we are dedicated in helping you to achieve.</Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row', md: 'row' } }}>
                            <List sx={{ width: { lg: '50%' } }}>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Checklist Development and Management.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Budget Development and Tracking.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Wedding Styling.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Etiquette Consultation.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Vendor Recommendations.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Monthly Planning Meetings.
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Concierge Assistance.
                                </ListItem>
                            </List>
                            <List sx={{ width: { lg: '50%' } }}>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Hotel / conference venue management
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Exhibition management
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Venue finding
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Catering arrangements
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Photo,Video,Audio
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Assisting with rentals
                                </ListItem>
                                <ListItem sx={{
                                    pl: '30px !important', color: '#283d58', fontSize: '15px', fontWeight: '600', mb: '12px', position: 'realtive', zIndex: '1', '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '5px',
                                        left: '-2px',
                                        width: '10px',
                                        height: '10px',
                                        border: '1px solid #283d58',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    },
                                    '&::after': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '6px',
                                        left: '6px',
                                        width: '10px',
                                        height: '6px',
                                        background: '#f2f2f2',
                                        zIndex: '-1',
                                        borderRadius: '2.5px'
                                    }
                                }}>
                                    <CheckIcon sx={{ position: 'absolute', top: '3px', left: '0', fontSize: '14px', color: '#283d58', mr: '15px', }} />
                                    Managing your guest list
                                </ListItem>
                            </List>
                        </Box>
                        <RegularButton sx={{ mt: '30px' }}>get a quote</RegularButton>
                    </Grid>
                    <Grid item sm={12} xs={12} md={4} lg={4} sx={{ display: 'flex', alignItems: 'flex-end', mt: '20px' }}>
                        <img src={aboutImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeAbout;