import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { Container, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CustomButton from '../CustomButton/CustomButton'

const Header = () => {

    const theme = useTheme();

    const useStyle = makeStyles({
        headerLink: {
            color: '#fff',
            textDecoration: 'none',
            margin: '0 20px',
        },
        smHeader: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        barIcon: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        }

    })

    const { headerLink, smHeader, barIcon } = useStyle();



    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
            </List>
        </Box>
    );


    return (
        <>

            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ background: 'red', position: 'fixed' }}>
                    <Container>
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <img style={{ height: '50px' }} src={logo} alt="" />
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, }}
                                className={barIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box className={smHeader}>
                                <Link className={headerLink} to="/">Home</Link>
                                <Link className={headerLink} to="/about">About</Link>
                                <Link className={headerLink} to="/service">Service</Link>
                                <CustomButton>Login</CustomButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;