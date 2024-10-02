import { Box, Paper, Stack, Typography } from "@mui/material"

const StatisticsCard = ({ icon, iconBg, iconColor, statsNum, statsName, ...props }) => {
    return (
        <Paper
            {...props}
            elevation={0}
        >
            <Stack direction='column' sx={{ height: '100%', textAlign: 'center', justifyContent: 'space-around' }}>
                <Box sx={{
                    bgcolor: iconBg,
                    p: 2,
                    borderRadius: '50rem',
                    display: 'flex',
                    justifyContent: 'center',
                    mx: 'auto',
                    fontSize: 50,
                    color: iconColor
                }}
                >
                    {icon}
                </Box>
                <Typography
                    variant="h2"
                    sx={{
                        mt: 2,
                        mb: 1
                    }}
                >
                    {`${statsNum}+`}
                </Typography>

                <Typography variant="h5" color="#77829D" fontWeight={500}>{statsName}</Typography>
            </Stack>
        </Paper>
    )
}

export default StatisticsCard