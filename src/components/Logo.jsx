import { Box, Typography } from "@mui/material"

const Logo = () => {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: 'start',
        alignItems: 'center',
        py: 2,
        gap: 0.5,
      }}>
        <img src='/logo.svg' alt="Medify Logo" />
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>Medify</Typography>
      </Box>
  )
}

export default Logo