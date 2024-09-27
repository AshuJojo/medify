
import { Box, Card, Stack, Typography, useTheme } from "@mui/material"

const IconCard = ({ icon, label, iconSize = '2.813rem', textSx, ...props }) => {
    const theme = useTheme();

    return (
        <Card
            {...props}
            sx={{
                ...props?.sx,
                borderRadius: '0.5rem',
                p: '1rem',
                py: '2rem',
            }}
        >
            <Stack direction='column'>
                <Box sx={{ fontSize: iconSize, mx: 'auto', color: theme.palette.primary.main }}>
                    {icon}
                </Box>
                <Typography variant="h5" textAlign='center' sx={textSx}>
                    {label}
                </Typography>
            </Stack>
           
        </Card>
    )
}

export default IconCard