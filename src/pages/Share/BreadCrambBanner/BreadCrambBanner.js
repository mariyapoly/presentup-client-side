import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import banner from '../../../images/titlebar-bg.jpg';

const BreadCrambBanner = ({ children }) => {

    const useStyle = makeStyles({
        navLinks: {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '15px'
        },
        servicebanner: {
            background: `url(${banner}) no-repeat center`,
            backgroundSize: 'cover',
            padding: '270px 0 0 0'
        },
        active: {
            color: '#ff3d55'
        }
    })
    const { servicebanner, navLinks, active } = useStyle();
    let match = useMatch(`/services`);

    return (
        <Box className={servicebanner}>
            <Container>
                <Typography sx={{ color: '#fff', fontSize: '46px', fontWeight: '700', textTransform: 'uppercase', textAlign: 'center', pb: '160px' }}>{children}</Typography>
                <Box sx={{
                    bgcolor: 'rgba(0,0,0,0.25)', p: '15px 0', textAlign: 'center', position: 'relative',
                    '&::before': {
                        position: 'absolute',
                        content: '""',
                        top: '0',
                        right: '100%',
                        width: '500%',
                        height: '100%',
                        display: 'block !important',
                        bgcolor: 'rgba(0,0,0,0.25)'
                    },
                    '&::after': {
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        content: '""',
                        width: '4px',
                        height: '100%',
                        background: '#ff3d55'
                    }
                }}>
                    <Link className={navLinks} to="/">Home</Link >
                    <Typography sx={{ color: '#fff', mx: '10px' }} variant="span">/</Typography>
                    <Link className={`${navLinks} ${match ? `${active}` : ""}`} to="/services">{children}</Link>
                </Box>
            </Container>
        </Box>
    );
};

export default BreadCrambBanner;