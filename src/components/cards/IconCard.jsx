
import { Box, Card, Typography, useTheme } from "@mui/material"

const IconCard = ({ icon, label, iconSize = '2.813rem', ...props }) => {
    const theme = useTheme();

    return (
        <Card
            {...props}
            sx={{
                ...props?.sx,
                flexDirection: 'column',
                borderRadius: '0.5rem',
                p: '1rem',
                py: '2rem',
            }}
        >
            <Box sx={{
                fontSize: iconSize,
                color: theme.palette.primary.main,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {icon}
            </Box>
            <Typography
                sx={{ color: '#ABB6C7', }}
            >
                {label}
            </Typography>
        </Card>
    )
}

export default IconCard