import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", sans-serif'
    },
    palette: {
        primary: {
            main: '#2AA8FF',
            dark: '#1B3C74',
            contrastText: '#ffffff',
        },
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

                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: "#000000",
                    fontSize: "56px",
                    fontWeight: "700",
                },
                h2: {
                    color: "#1B3C74",
                    fontWeight: "600",
                    fontSize: "48px",
                    lineHeight: 1.2,
                },
                h3: {
                    color: "#102851",
                    fontSize: "30px",
                    fontWeight: "500",
                },
            },
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