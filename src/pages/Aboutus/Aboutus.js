import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, useMatch } from "react-router-dom";
import banner from "../../images/titlebar-bg.jpg";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutImg from "../../images/single-img-five.jpg";
import RegularBtn from "../Share/RegularBtn/RegularBtn";
import CheckIcon from "@mui/icons-material/Check";

const Aboutus = () => {
  const { RegularButton } = RegularBtn();
  const useStyle = makeStyles({
    navLinks: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "15px",
    },
    servicebanner: {
      background: `url(${banner}) no-repeat center`,
      backgroundSize: "cover",
      padding: "270px 0 0 0",
    },
    active: {
      color: "#ff3d55",
    },
    aboutListStyle: {
      color: "#283d58",
      fontSize: "17px",
      fontWeight: "500",
      paddingLeft: "30px !important",
      marginBottom: "12px",
      position: "relative",
      zIndex: "1",
      "&::before": {
        position: "absolute",
        content: '""',
        top: "5px",
        left: "-2px",
        width: "12px",
        height: "12px",
        border: "1.5px solid #ff3d55",
        zIndex: "-1",
      },
      "&::after": {
        position: "absolute",
        content: '""',
        top: "5px",
        left: "6px",
        width: "10px",
        height: "6px",
        background: "#fff",
        zIndex: "-1",
      },
    },
    iconStyle: {
      position: "absolute",
      top: "0px",
      left: "-2px",
      fontSize: "18px !important",
      marginRight: "15px",
      color: "#ff3d55 !important",
    },
  });
  const { servicebanner, navLinks, active, aboutListStyle, iconStyle } =
    useStyle();
  let match = useMatch(`/about`);

  return (
    <div>
      <Box className={servicebanner}>
        <Container>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "46px",
              fontWeight: "700",
              textTransform: "uppercase",
              textAlign: "center",
              mb: "5px",
            }}
          >
            ABOUT US
          </Typography>
          <Typography sx={{ pb: "160px", textAlign: "center", color: "#fff" }}>
            I Do What I Love
          </Typography>
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.25)",
              p: "15px 0",
              textAlign: "center",
              position: "relative",
              "&::before": {
                position: "absolute",
                content: '""',
                top: "0",
                right: "100%",
                width: "500%",
                height: "100%",
                display: "block !important",
                bgcolor: "rgba(0,0,0,0.25)",
              },
              "&::after": {
                position: "absolute",
                top: "0",
                right: "0",
                content: '""',
                width: "4px",
                height: "100%",
                background: "#ff3d55",
              },
            }}
          >
            <Link className={navLinks} to="/">
              Home
            </Link>
            <Typography sx={{ color: "#fff", mx: "10px" }} variant="span">
              /
            </Typography>
            <Link
              className={`${navLinks} ${match ? `${active}` : ""}`}
              to="/services"
            >
              About Us
            </Link>
          </Box>
        </Container>
      </Box>
      <Box sx={{ p: "80px 0 90px" }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(0,0,0,.06)",
              fontSize: { lg: "50px", md: "50px", sm: "30px", xs: "29px" },
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            WELCOME TO
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: { lg: "-45px", md: "-45px", sm: "-30px", xs: "-26px" },
              color: "#283d58",
              fontSize: { lg: "48px", md: "48px", sm: "40px", xs: "30px" },
              mb: "25px",
            }}
            variant="h3"
          >
            About Presentup
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mx: "auto",
              color: "#57616b",
              fontSize: "16px",
              width: { lg: "510px" },
              lineHeight: "25px",
              mb: "35px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum hasply dummy texindustry’type.
          </Typography>
          <Grid container spacing={3.5} sx={{ marginTop: "30px" }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={aboutImg} alt="about-img" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{ color: "#828c96", fontSize: "15px", lineHeight: "1.8" }}
                >
                  <Typography variant="span" sx={{ fontWeight: "700" }}>
                    Lorem Ipsum
                  </Typography>
                  is simply dummy{" "}
                  <Typography variant="span" sx={{ fontWeight: "700" }}>
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                  </Typography>{" "}
                  1500s,{" "}
                  <Typography variant="span" sx={{ fontWeight: "700" }}>
                    when an unknown printer took a galley
                  </Typography>{" "}
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic type setting.
                </Typography>
                <List sx={{ marginTop: "30px", marginBottom: "30px" }}>
                  <ListItem className={aboutListStyle}>
                    <CheckIcon className={iconStyle} />
                    Aliquam varius sapien non augue imperdiet ultrices.
                  </ListItem>
                  <ListItem className={aboutListStyle}>
                    <CheckIcon className={iconStyle} />
                    Etiam in lacus at tortor ultricies ornare.
                  </ListItem>
                  <ListItem className={aboutListStyle}>
                    <CheckIcon className={iconStyle} />
                    Morbi vitae urna vitae nisi aliquam commodo.
                  </ListItem>
                  <ListItem className={aboutListStyle}>
                    <CheckIcon className={iconStyle} />
                    Mauris porttitor nibh non elit tincidunt sollicitudin.
                  </ListItem>
                </List>
                <RegularButton>Read More</RegularButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Aboutus;
