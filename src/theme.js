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
            },
            styleOverrides: {
                root: {
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    lineHeight: '1.5rem',
                    borderRadius: 8,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 0
                    }
                },
            }
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: '"Poppins", sans-serif'
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
        },

    }
});

export default theme;