import React from "react";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import teamImg1 from "../../images/team-img-001.jpg";
import teamImg2 from "../../images/team-img-002.jpg";
import teamImg3 from "../../images/team-img-003.jpg";

const OurTeam = () => {
  return (
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
          SEE OUR BEST
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
          Planner Latest Team
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
          As the premier event planning company in the area. Each event and
          client is unique and we believe our services should be as well.
        </Typography>
        <Grid container spacing={3.5} sx={{ marginTop: "30px" }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ position: "relative" }}>
              <img src={teamImg1} alt="team-img" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "40px",
                  left: "0",
                  width: "75%",
                  background: "#fff",
                  opacity: "1",
                  padding: "20px 15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#283d58",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Jimmy Edward
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "#828c96", fontSize: "13px" }}
                >
                  Wedding Planner
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ position: "relative" }}>
              <img src={teamImg2} alt="team-img" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "40px",
                  left: "0",
                  width: "75%",
                  background: "#fff",
                  opacity: "1",
                  padding: "20px 15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#283d58",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Diana Aiden
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "#828c96", fontSize: "13px" }}
                >
                  Event Stylist
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ position: "relative" }}>
              <img src={teamImg3} alt="team-img" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "40px",
                  left: "0",
                  width: "75%",
                  background: "#fff",
                  opacity: "1",
                  padding: "20px 15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#283d58",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Lenalee Crus
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "#828c96", fontSize: "13px" }}
                >
                  Graphic Designer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
