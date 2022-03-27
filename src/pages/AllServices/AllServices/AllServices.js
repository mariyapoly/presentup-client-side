import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../../Share/Service/Service";
import { makeStyles } from "@mui/styles";
import { Link, useMatch } from "react-router-dom";
import banner from "../../../images/titlebar-bg.jpg";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://radiant-cove-56570.herokuapp.com/allServices")
      .then(function (response) {
        setServices(response.data);
      });
  }, []);

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
  });
  const { servicebanner, navLinks, active } = useStyle();
  let match = useMatch(`/services`);

  return (
    <>
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
            OUR GREAT SERVICES
          </Typography>
          <Typography sx={{ pb: "160px", textAlign: "center", color: "#fff" }}>
            We Here You Want A Party?
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
              Services
            </Link>
          </Box>
        </Container>
      </Box>
      <Box sx={{ p: "80px 0 70px" }}>
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
            GREAT PROVIDE PRESENTUP
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
            Provide Best Services
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
            With our passion, knowledge, creative flair and inspiration, we are
            dedicated in helping you to achieve.
          </Typography>
          <Grid container spacing={3.5}>
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllServices;
