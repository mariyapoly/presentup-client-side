import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMatch, useParams, Link } from "react-router-dom";
import banner from "../../../images/titlebar-bg.jpg";
import { makeStyles } from "@mui/styles";
import ServiceAccordion from "../../ServiceDeatils/ServiceAccordion/ServiceAccordion";
import TextField from "@mui/material/TextField";
import SliderService from "../../ServiceDeatils/SliderService/SliderService";
import useAuth from "../../../hooks/useAuth";

const SingleService = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://radiant-cove-56570.herokuapp.com/services/${serviceId}`)
      .then(function (response) {
        setService(response.data);
      });
  }, [serviceId]);

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
    serviceField: {
      "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "#273f5b",
        },
      "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        color: "#273f5b",
        fontSize: "17px",
      },
    },
  });

  const [userInfo, setUserInfo] = useState({});

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };
  const handlebooking = (e) => {
    e.preventDefault();
    const newUserInfo = {
      ...userInfo,
      serviceName: service?.serviceName,
      price: service?.price,
      name: user?.displayName,
      email: user?.email,
    };
    console.log(newUserInfo);
  };

  const { servicebanner, navLinks, active, serviceField } = useStyle();
  let match = useMatch(`/singleService/${serviceId}`);
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
              pb: "160px",
            }}
          >
            Booking {service.serviceName}
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
              to={`/singleService/${serviceId}`}
            >
              {service.serviceName}
            </Link>
          </Box>
        </Container>
      </Box>
      <Container sx={{ mt: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} sx={{ pr: "100px" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    mb: "10px",
                    color: "#273f5b",
                  }}
                  varient="span"
                >
                  {service.serviceName}
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "700", color: "#ff3d55" }}
                  varient="span"
                >
                  ${service.price}
                </Typography>
              </Box>
              <img
                style={{ width: "100%" }}
                src={service.img}
                alt="serviceImg"
              />
              <Typography
                sx={{
                  color: "#283d58",
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "38px",
                  m: "25px 0",
                }}
              >
                Our Strategy
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "#828c96", lineHeight: "26px" }}
              >
                Sit solum philosophia ad. No omnes fabulas splendide usu, modo
                prima singulis est ad. Quod facilisi qui at. Eum congue eligendi
                moderatius ne, sea ut dolorum petentium. Porro vulputate
                instructior per ne. Sed choro facilisis similique in, tamquam
                complectitur vis et.
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#828c96",
                  lineHeight: "26px",
                  m: "15px 0 30px",
                }}
              >
                Cum nonumy democritum cu. Tempor minimum senserit te sed, nihil
                feugait deleniti vim an. Id pri putent timeam alienum, graeco
                molestiae quo ad.
              </Typography>
              <ServiceAccordion></ServiceAccordion>
            </Box>
            <SliderService></SliderService>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                mb: "30px",
                color: "#273f5b",
                textAlign: "center",
              }}
              varient="span"
            >
              Book Now
            </Typography>
            <form className={serviceField} onSubmit={handlebooking}>
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="email"
                defaultValue={user?.email}
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="name"
                defaultValue={user?.displayName}
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="serviceName"
                value={service.serviceName || ""}
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="price"
                value={`$${service.price}` || ""}
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="phone"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="date"
                type="date"
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mb: "20px" }}
                onBlur={handleBlur}
                name="address"
                label="Address"
                variant="outlined"
              />
              <Button type="submit">Book Now</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleService;
