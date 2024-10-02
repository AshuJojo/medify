import { Box, Typography } from "@mui/material"

const Logo = ({ color = "primary", iconSize = 24 }) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: 'start',
      alignItems: 'center',
      py: 2,
      gap: 0.5,
    }}>
      <img src='/logo.svg' alt="Medify Logo" width={iconSize} height={iconSize}/>
      <Typography variant="subtitle1" color={color} sx={{ fontWeight: 700 }}>Medify</Typography>
    </Box>
  )
}

export default Logo