import React from 'react'

import { Typography, Grid, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    Grid: {
        marginTop: `${theme.spacing(8)}px`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[6]
    },
    Panel: {
        padding: `${theme.spacing(2)}px ${theme.spacing(9)}px`
    },
    Copyright: {
        textDecoration: "none",
        color: theme.palette.text.primary
    },
    Dot: {
        fontSize: "2.4em",
        margin: `${theme.spacing(1)}px`
    },
    Link: {
        transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: "100ms",
        }),
        "&:hover": {
            color: theme.palette.primary.main
        },
        textDecoration: "none",
        color: "inherit"
    }
}))

function BigDot({ classes }) {
    return <span className={classes.Dot}>•</span>
}

export default () => {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.Grid}>
                <Grid item xs={12} className={classes.Panel}>
                    <a href="https://ayberktandogan.github.io/" rel="noopener noreferrer" target="_blank" className={classes.Copyright}>
                        <Typography variant="h6">ayberktandogan &copy; {(new Date()).getFullYear()} // </Typography>
                    </a>
                    <a href="https://github.com/ForFansubs/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <FontAwesomeIcon className={classes.icon} icon={faGithub} size="2x" />
                    </a>
                    <BigDot classes={classes} />
                    <a href="https://forfansubs.github.io/docs/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <FontAwesomeIcon className={classes.icon} icon={faBook} size="2x" />
                    </a>
                </Grid>
            </Grid>
        </>
    )
}