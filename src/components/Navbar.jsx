
import { Box, Button, Container, Divider, Drawer, Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const CustomNavLink = ({ theme, to, children, borderBottom, width = "auto" }) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          width: width,
          textDecoration: 'none',
          color: isActive ? theme.palette.primary.main : "black",
          fontWeight: isActive ? 500 : 400,
          borderBottom: isActive && borderBottom === undefined && isLargeScreen ? `4px solid ${theme.palette.primary.main}` : "",
          paddingTop: 19,
          paddingBottom: 17,
          marginTop: -18,
          marginBottom: -18,
          textAlign: 'center'
        };
      }}
    >
      {children}
    </NavLink>
  )
}

const Navbar = ({ bgColor = 'white', shadow = true }) => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    console.log("Open Drawer Clicked");
    setIsDrawerOpen(true)
  }

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setIsDrawerOpen(false)}>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 2,
        flexDirection: 'column'
      }}>
        <CustomNavLink to="/" borderBottom={false} theme={theme}><Logo /></CustomNavLink>

        <Divider sx={{ width: '100%' }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 2,
          mt: 2
        }}>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Find Doctors</Typography>
          <CustomNavLink to="/hospitals" theme={theme}><Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }} >Hospital</Typography></CustomNavLink>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Medicines</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Surgeries</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Software for Provider</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Facilities</Typography>
          <CustomNavLink to="/mybookings" borderBottom={false} theme={theme} width="100%">
            <Button sx={{ width: '100%' }}>
              My Bookings
            </Button>
          </CustomNavLink>
        </Box>
      </Container >
    </Box>
  );

  return (
    <Box
      component={'nav'}
      sx={{
        backgroundColor: bgColor,
        boxShadow: shadow ? 2 : 0,
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomNavLink to="/" borderBottom={false} theme={theme}><Logo /></CustomNavLink>

        <Box sx={{
          display: { xs: 'none', md: "flex" },
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: { md: 2, lg: 4 },
        }}>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Find Doctors</Typography>
          <CustomNavLink to="/hospitals" theme={theme}><Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }} >Hospital</Typography></CustomNavLink>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Medicines</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Surgeries</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Software for Provider</Typography>
          <Typography to="#" sx={{ typography: { sm: 'body1', xs: 'body2' }, cursor: 'pointer' }}>Facilities</Typography>
          <CustomNavLink to="/mybookings" borderBottom={false} theme={theme}><Button>My Bookings</Button></CustomNavLink>
        </Box>
        <Box sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center'
        }}>
          <GiHamburgerMenu fontSize={30} color={theme.palette.primary.main} onClick={openDrawer} />
        </Box>
      </Container >
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {drawer}
      </Drawer>
    </Box >
  )
}

export default Navbar;