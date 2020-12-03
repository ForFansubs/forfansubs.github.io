import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import Tooltip from '../Tooltip'

const useStyles = makeStyles(theme => ({
    LogoContainer: {
        height: "64px",
        width: props => `${props.offset[1] - props.offset[0]}px`,
        backgroundImage: props => `url("${props.logo}")`,
        backgroundPosition: props => `-${props.offset[0]}px 0`,
        margin: `0 ${theme.spacing(4)}px`,
        filter: "saturate(0%)",
        transition: theme.transitions.create(
            ["filter"],
            { duration: theme.transitions.duration.short }
        ),
        [theme.breakpoints.down('md')]: {
            margin: `0`
        },
        "&:hover": {
            filter: "saturate(100%)",
        }
    }
}))

function TechPanel(props) {
    const { title, link } = props
    const classes = useStyles(props)

    return (
        <>
            <Grid item>
                <a target="_blank" href={link} rel="noopener noreferrer">
                    <Tooltip title={title} classes={classes}>
                        <Box className={classes.LogoContainer} />
                    </Tooltip>
                </a>
            </Grid>
        </>
    )
}

TechPanel.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    offset: PropTypes.array.isRequired
}

export { TechPanel }