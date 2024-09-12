
import { Box, Card, Typography, useTheme } from "@mui/material"

const IconCard = ({ icon, label, ...props }) => {
    const theme = useTheme();

    return (
        <Card
            {...props}
            sx={{
                ...props?.sx,
                minWidth: 125,
                minHeight: 100,
                width: 'fit-content',
                flexDirection: 'column',
                borderRadius: '0.5rem',
                p: '1rem'
            }}
        >
            <Box sx={{
                fontSize: '2.813rem',
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