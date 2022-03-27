import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import bgImg from "../../../images/titlebar-bg.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
  const nagivate = useNavigate();
  const { signUpWidthEmailPassword, user, error, isLoading } = useAuth();

  const [userInfo, setUserInfo] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signUpWidthEmailPassword(
      userInfo.email,
      userInfo.password,
      userInfo.name,
      nagivate
    );
  };

  const useStyle = makeStyles({
    loginBg: {
      width: "700px",
      background: `url(${bgImg}) no-repeat center`,
      backgroundSize: "cober",
      margin: "200px auto 0",
      padding: "0 0 50px 0",
      textAlign: "center",
    },
    inputField: {
      "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "#fff",
        },
      "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        color: "#fff",
        fontSize: "17px",
      },
      "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
        color: "#fff",
      },
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
      },
      "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "#fff",
        },
      "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
        color: "#fff",
      },
      "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root": {
        color: "#fff",
      },
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      textTransform: "uppercase",
      padding: "30px 50px",
      background: "rgb(1, 37, 70)",
    },
  });
  const { inputField, loginBg, link } = useStyle();

  return (
    <Box className={loginBg}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "90px",
        }}
      >
        <Link className={link} to="/login">
          sign in
        </Link>
        <Link className={link} to="/signup">
          sign up
        </Link>
      </Box>
      <p style={{ color: "#fff" }}>{user.displayName}</p>
      <p style={{ color: "#fff" }}>{error}</p>
      {isLoading ? (
        <CircularProgress sx={{ color: "#ff3d55" }} />
      ) : (
        <form className={inputField} onSubmit={handleLogin}>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              sx={{
                width: "70%",
                mb: "20px",
                color: "#fff",
              }}
              onBlur={handleBlur}
              name="name"
              label="Your Name"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "70%",
                mb: "20px",
                color: "#fff",
              }}
              onBlur={handleBlur}
              name="email"
              label="Your Email"
              variant="outlined"
              type="email"
            />
            <TextField
              sx={{
                width: "70%",
                mb: "20px",
                color: "#fff",
              }}
              onBlur={handleBlur}
              name="password"
              label="Your Password"
              variant="outlined"
              type="password"
            />
          </Box>
          <Button
            type="submit"
            style={{
              padding: "12px 40px",
              backgroundColor: "#ff3d55",
              color: "#fff",
            }}
          >
            Sign Up
          </Button>
        </form>
      )}
    </Box>
  );
};

export default SignUp;
