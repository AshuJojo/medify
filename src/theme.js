import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#2AA8FF',
            dark: '#1B3C74',
            contrastText: '#ffffff',
            black: '000000',
            white: '#FFFFFF',
            success: '#01A400'
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
        h1: {
            color: "#000000",
            fontSize: "56px",
            fontWeight: 700,
        },
        h2: {
            color: "#1B3C74",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: 1.2,
        },
        h3: {
            color: "#102851",
            fontSize: "30px",
            fontWeight: 500,
        },
        h4: {
            color: '#102851',
            fontWeight: 500,
            fontSize: '20px'
        },
        h5: {
            color: '#ABB6C7',
            fontWeight: 400,
            fontSize: '18px'
        },
        h6: {
            color: '#2AA7FF',
            fontWeight: 600,
            fontSize: '16px'
        },
        body1: {
            fontSize: '20px',
            fontWeight: 400,
            color: '#5C6169'
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
            color: '#5C6169'
        },
        subtitle1: {
            fontSize: '24px',
            fontWeight: 400,
            color: '#1B3C74'
        },
        subtitle2: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#2AA7FF'
        }
    },
    components: {
        MuiButton: {
            // defaultProps: {
            //     variant: 'contained',
            //     color: 'primary',
            // },
            // styleOverrides: {
            //     root: {
            //         fontSize: '0.8rem',
            //         fontWeight: 400,
            //         lineHeight: '1.5rem',
            //         borderRadius: 8,
            //         boxShadow: 'none',
            //         '&:hover': {
            //             boxShadow: 0
            //         }
            //     },
            // }

            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                },
                contained: {
                    color: "#fff",
                    typography: 'body2'
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '& >input': {
                        fontSize: '14px'
                    }
                }
            }
        },
        // MuiCard: {
        //     styleOverrides: {
        //         root: {
        //             width: '100%',
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //         }
        //     }
        // },
        // MuiContainer: {
        //     styleOverrides: {
        //         root: {
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center'
        //         }
        //     }
        // },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    }
});


export default responsiveFontSizes(theme);