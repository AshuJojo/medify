
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children, borderBottom }) => {
  const theme = useTheme();

  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: 'none',
          color: isActive ? theme.palette.primary.main : "black",
          fontWeight: isActive ? 500 : 400,
          borderBottom: isActive && borderBottom === undefined ? `4px solid ${theme.palette.primary.main}` : "",
          paddingTop: 19,
          paddingBottom: 17,
          marginTop: -18,
          marginBottom: -18
        };
      }}
    >
      {children}
    </NavLink>
  )
}

const Navbar = ({ bgColor = 'white', shadow = true }) => {

  return (
    <Box
      component={'nav'}
      sx={{
        backgroundColor: bgColor,
        boxShadow: shadow ? 2 : 0,
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomNavLink to="/" borderBottom={false}><Logo /></CustomNavLink>

        <Box sx={{
          display: "flex",
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 4
        }}>
          <Typography to="#">Find Doctors</Typography>
          <CustomNavLink to="/hospitals">Hospitals</CustomNavLink>
          <Typography to="#">Medicines</Typography>
          <Typography to="#">Surgeries</Typography>
          <Typography to="#">Software for Provider</Typography>
          <Typography to="#">Facilities</Typography>
          <CustomNavLink to="/mybookings" borderBottom={false}><Button>My Bookings</Button></CustomNavLink>
        </Box>
      </Container >
    </Box >
  )
}

export default Navbar;