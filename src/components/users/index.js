import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Grid } from '@material-ui/core'
import Tooltip from '../Tooltip'

const useStyles = makeStyles(theme => ({
    LogoContainer: {
        height: "60px",
        margin: `0 ${theme.spacing(4)}px`,
        [theme.breakpoints.down('md')]: {
            margin: `0`,
            height: "auto",
            width: "95%"
        }
    }
}))

function UsersPanel(props) {
    const { title, link, logo, height } = props
    const classes = useStyles(props)

    return (
        <>
            <Grid item>
                <a target="_blank" href={link} rel="noopener noreferrer">
                    <Tooltip title={title}>
                        <img className={classes.LogoContainer} src={logo} alt={title} height={height ? height : undefined} />
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