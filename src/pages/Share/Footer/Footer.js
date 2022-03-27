import React from "react";
import footerBg from "../../../images/footer-bg.jpg";
import { makeStyles } from "@mui/styles";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  const useStyle = makeStyles({
    footerBackground: {
      background: `url(${footerBg}) no-repeat center`,
      backgroundSize: "cover",
      padding: "80px 0",
    },
    footerHeading: {
      color: "#fff",
      textTransform: "capitalize",
      fontWeight: "700 !important",
      fontSize: "20px !important",
      marginBottom: "25px !important",
    },
    footerList: {
      color: "#fff",
      marginBottom: "15px !important",
    },
  });

  const { footerBackground, footerHeading, footerList } = useStyle();

  return (
    <Box className={footerBackground}>
      <Container>
        <Grid container spacing={3.5}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box>
              <Typography className={footerHeading}>Get in touch</Typography>
              <Typography className={footerList}>
                Themeforest, Envanto HQ 24 Fifth st., Los Angeles, USA
              </Typography>
              <Typography className={footerList}>info@example.com</Typography>
              <Typography className={footerList}>
                Phone: +12 (3) 4567 899
              </Typography>
              <Typography className={footerList}>
                {" "}
                Support: +12 (3) 4567 445
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box>
              <Typography className={footerHeading}>Get in touch</Typography>
              <List sx={{ padding: "0" }}>
                <ListItem className={footerList}>Our Services</ListItem>
                <ListItem className={footerList}>Our Gallery</ListItem>
                <ListItem className={footerList}>Event Guides</ListItem>
                <ListItem className={footerList}>About Us</ListItem>
                <ListItem className={footerList}>Latest News</ListItem>
                <ListItem className={footerList}>Pricing & Terms</ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box>
              <Typography className={footerHeading}>
                Frequent Questions
              </Typography>
              <List sx={{ padding: "0" }}>
                <ListItem className={footerList}>
                  How Can I Set An Event?
                </ListItem>
                <ListItem className={footerList}>
                  What Venues Do You Use?
                </ListItem>
                <ListItem className={footerList}>Event Catalogue</ListItem>
                <ListItem className={footerList}>Shipping & Delivery</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
