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
        margin: theme.spacing(2, 0)
    },
    Copyright: {
        textDecoration: "none",
        color: theme.palette.text.primary
    },
    CopyrightText: {
        fontSize: "0.875rem"
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

export default function Footer() {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.Grid} justify="center">
                <Grid item xs={11} className={classes.Panel}>
                    <a href="https://ayberktandogan.github.io/" rel="noopener noreferrer" target="_blank" className={classes.Copyright}>
                        <Typography variant="h6" component="p" className={classes.CopyrightText}>ayberktandogan &copy; {(new Date()).getFullYear()}</Typography>
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