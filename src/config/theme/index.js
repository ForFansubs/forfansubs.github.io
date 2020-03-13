import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
    palette: {
        primary: { main: '#6255AF' },
        secondary: { main: 'rgb(255,127,80)' },
        background: {
            default: "rgb(255,255,255)",
            level1: "rgb(236,236,236)",
            level2: "rgb(246,246,246)",
            paper: "rgb(255,255,255)"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.74)"
        },
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
        fontFamily: `'Rubik', sans-serif`,
        h1: {
            fontWeight: "bold",
            fontSize: "4.8rem",
            lineHeight: 1.2
        },
        h2: {
            fontWeight: "bold",
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h3: {
            fontWeight: "bold",
            fontSize: "2.4rem",
            lineHeight: 1.2
        },
        h4: {
            fontWeight: "bold",
            fontSize: "1.7rem"
        },
        h5: {
            fontWeight: "bold",
            fontSize: "1rem"
        },
        h6: {
            fontWeight: "bold",
            fontSize: ".8rem"
        },
        body1: {
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "1.4rem"
        },
        body2: {
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "1.2rem"
        },
        subtitle1: {
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "1.2rem",
            lineHeight: 1.2
        },
        subtitle2: {
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "1.0rem"
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
                backgroundColor: "#000",
                fontSize: ".8em"
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

export default createMuiTheme({ ...theme })