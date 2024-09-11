import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#2AA8FF',
            dark: '#1B3C74',
            contrastText: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                sx: {
                    boxShadow: 0,
                    borderRadius: 2,
                    '&:hover': {
                        boxShadow: 0
                    }
                }
            }
        }
    }
});

export default theme;