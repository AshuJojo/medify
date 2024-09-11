
import { Box, Button, Container, Typography } from "@mui/material";

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
        <Box sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
          gap: 0.5,
        }}>
          <img src='/logo.svg' alt="Medify Logo" />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>Medify</Typography>
        </Box>

        <Box sx={{
          display: "flex",
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 4
        }}>
          <Typography>Find Doctors</Typography>
          <Typography>Hospitals</Typography>
          <Typography>Medicines</Typography>
          <Typography>Surgeries</Typography>
          <Typography>Software for Provider</Typography>
          <Typography>Facilities</Typography>
          <Button>My Bookings</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;