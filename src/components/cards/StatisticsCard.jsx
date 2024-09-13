import { Box, Paper, Typography } from "@mui/material"

const StatisticsCard = ({ icon, iconBg, iconColor, statsNum, statsName, ...props }) => {
    return (
        <Paper
            {...props}
            elevation={0}
        >
            <Box sx={{
                bgcolor: iconBg,
                p: 2,
                width: 70,
                height: 70,
                borderRadius: '50rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                mx: 'auto',
                fontSize: 50,
                color: iconColor
            }}
            >
                {icon}
            </Box>
            <Typography variant="h3" sx={{ color: 'primary.dark', textAlign: 'center', fontWeight: 600, mt: 2, mb: 1 }}>{`${statsNum}+`}</Typography>
            <Typography sx={{ color: '#77829D', textAlign: 'center', fontWeight: 500, fontSize: 18 }}>{statsName}</Typography>
        </Paper>
    )
}

export default StatisticsCard