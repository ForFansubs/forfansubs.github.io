import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = {
    palette: {
        primary: { main: '#cc30ff' },
        secondary: { main: 'rgb(255,127,80)' },
        contrastThreshold: 3,
    },
    props: {
        MuiTypography: {
            variantMapping: {
                subtitle1: 'span',
                subtitle2: 'span',
                body1: 'span',
                body2: 'span'
            }
        },
    },
    typography: {
        fontFamily: `'Geomanist', sans-serif`,
        h1: {
            fontWeight: "bold",
            fontSize: "4.25rem",
            lineHeight: 1.2
        },
        h2: {
            fontWeight: "bold",
            fontSize: "3.5rem",
            lineHeight: 1.2
        },
        h3: {
            fontWeight: "bold",
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h4: {
            fontWeight: "bold",
            fontSize: "2rem"
        },
        h5: {
            fontWeight: "bold",
            fontSize: "1.25rem"
        },
        h6: {
            fontWeight: "bold",
            fontSize: ".75rem"
        },
        body1: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.125rem"
        },
        body2: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.875rem"
        },
        subtitle1: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.125rem",
            lineHeight: 1.3
        },
        subtitle2: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.875rem"
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                whiteSpace: "pre-wrap"
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'rgb(236,236,236)'
            }
        },
        MuiTooltip: {
            tooltip: {
                fontFamily: "'Open Sans', sans-serif"
            }
        }
    },
    transitions: {
        duration: {
            short: 400,
            shorter: 300
        },
        easing: {
            ease: "ease"
        }
    },
    themeName: 'ForFansubs Light Theme'
}

export default unstable_createMuiStrictModeTheme({ ...theme })