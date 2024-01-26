import React from "react";
import { Box, Typography, useTheme,AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
   } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import './Nav.css'
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
    //   bgcolor=
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
      // sx={{  }}
    >
     {/* <Typography className="customTypography" variant="h3" color="primary" fontWeight="bold">
   Generate Random Image and Share
</Typography> */}
      {loggedIn ? (
        <>
        <Typography className="customTypography" variant="h3" color="primary" fontWeight="bold">
   Generate Random Image and Share
</Typography>
          <NavLink to="/login" onClick={handleLogout} p={1} className="btn1">
            Logout
          </NavLink>
        </>
      ) : (
        <>
           <Typography className="customTypography" variant="h4" color="primary" fontWeight="bold">
        Please Login to Generate and Share Random Image 
          </Typography>
           <NavLink to="/login" onClick={handleLogout} p={1} className="btn1">
            Login
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;