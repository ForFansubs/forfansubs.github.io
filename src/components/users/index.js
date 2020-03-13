import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Tooltip, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    LogoContainer: {
        height: "80px",
        margin: `0 ${theme.spacing(4)}px`,
        [theme.breakpoints.down('md')]: {
            margin: `0`
        }
    }
}))

function UsersPanel(props) {
    const { title, link, logo } = props
    const classes = useStyles(props)

    return (
        <>
            <Grid item>
                <a target="_blank" href={link} rel="noopener noreferrer">
                    <Tooltip title={title}>
                        <img className={classes.LogoContainer} src={logo} alt={title} />
                    </Tooltip>
                </a>
            </Grid>
        </>
    )
}

UsersPanel.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
}

export { UsersPanel }