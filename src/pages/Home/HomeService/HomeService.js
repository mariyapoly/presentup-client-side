import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, useTheme } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import serviceBg from "../../../images/service-bg-001.jpg";
import Service from "../../Share/Service/Service";

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://radiant-cove-56570.herokuapp.com/services")
      .then(function (response) {
        setServices(response.data);
      });
  }, []);
  const theme = useTheme();
  const useStyle = makeStyles({
    servicesBg: {
      background: `url(${serviceBg}) no-repeat center`,
      backgroundSize: "cover",
      padding: "120px 0",
      [theme.breakpoints.down("md")]: {
        padding: "60px 0",
      },
    },
  });

  const { servicesBg } = useStyle();

  return (
    <Box className={servicesBg}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,.08)",
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
            color: "#fff",
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
            color: "#fff",
            fontSize: "16px",
            width: { lg: "510px" },
            lineHeight: "25px",
            mb: "35px",
          }}
        >
          With our passion, knowledge, creative flair and inspiration, we are
          dedicated in helping you to achieve.
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeService;
