import { Box, Button, Divider, InputAdornment, TextField, Typography } from "@mui/material";

export default function SmsForm() {
    return (
        <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
                Get the link to download the app
            </Typography>
            <Box component='form' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }}}>
                <Box sx={{ display: "flex", py: 2, flexGrow: 1, }}>
                    <TextField
                        placeholder="Enter phone number"
                        type="number"
                        size='small'
                        sx={{
                            m: 1,
                            flexGrow: 1,
                            bgcolor: 'white',
                            pl: 0,
                            ml: 0,
                            my: 0,
                            borderRadius: 1,
                            '& fieldset': {
                                border: 0
                            }
                        }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start" sx={{ maxHeight: '100%', height: '100%' }}>
                                    <Typography variant="body2">+91</Typography>
                                    <Divider orientation="vertical" flexItem sx={{ pl: 2, mr: 1 }} />
                                </InputAdornment>,
                            },
                        }}
                    />
                    <Button variant="contained" sx={{whiteSpace: 'nowrap'}} disableElevation>Send Sms</Button>
                </Box>
            </Box>
        </Box>
    )
}