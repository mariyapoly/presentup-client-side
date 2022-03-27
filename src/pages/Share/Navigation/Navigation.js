import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme();

  const useStyle = makeStyles({
    navLink: {
      color: "#fff",
      textDecoration: "none",
      marginLeft: "25px",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        color: "rgb(1, 37, 70)",
        display: "block",
        marginTop: "15px",
      },
    },
    NavToggleIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    NavItemContainer: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    logoImg: {
      [theme.breakpoints.down("md")]: {
        height: "40px !important",
      },
    },
  });

  const { navLink, NavToggleIcon, NavItemContainer, logoImg } = useStyle();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List sx={{ marginTop: "50px" }}>
        <Link className={navLink} to="/">
          Home
        </Link>
        <Link className={navLink} to="/about">
          About Us
        </Link>
        <Link className={navLink} to="/services">
          Our Service
        </Link>
        {user.email ? (
          <Button
            sx={{
              color: "rgb(1, 37, 70)",
              marginTop: "5px",
              marginLeft: "20px",
              fontSize: "17px",
              fontWeight: "500 !important",
              textTransform: "capitalize",
            }}
            onClick={logOut}
          >
            Logout
          </Button>
        ) : (
          <Link className={navLink} to="/login">
            Login
          </Link>
        )}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            background: "rgba(14,56,94,0.87)",
            py: "20px",
            boxShadow: "none",
          }}
        >
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "0 !important",
              }}
            >
              <>
                <Box>
                  <Link to="/">
                    <img
                      className={logoImg}
                      style={{ height: 60 }}
                      src={logo}
                      alt=""
                    />
                  </Link>
                </Box>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className={NavToggleIcon}
                  onClick={() => setState(true)}
                >
                  <MenuIcon sx={{ fontSize: "36px" }} />
                </IconButton>
              </>

              <Box className={NavItemContainer}>
                <Link className={navLink} to="/">
                  Home
                </Link>
                <Link className={navLink} to="/about">
                  About Us
                </Link>
                <Link className={navLink} to="/services">
                  Our Service
                </Link>
                {user.email ? (
                  <Button
                    sx={{
                      color: " #fff",
                      marginLeft: "20px",
                      fontSize: "17px",
                      fontWeight: "500 !important",
                      textTransform: "capitalize",
                    }}
                    onClick={logOut}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link className={navLink} to="/login">
                    Login
                  </Link>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <React.Fragment>
        <Drawer open={state} onClose={() => setState(false)}>
          {list}
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Navigation;
