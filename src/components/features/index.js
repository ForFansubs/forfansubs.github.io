import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Typography, Grid, Box, makeStyles, Divider } from '@material-ui/core'
import { isMobile } from 'react-device-detect';
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    ImageContainer: {
        backgroundImage: props => `url("${props.image}")`,
        backgroundSize: "cover",
        height: props => props.height || "400px"
    },
    ScrollToBottom: {
        animation: `$ScrollToBottom`,
        animationDuration: props => props.duration || `3500ms`,
        backgroundPosition: "center bottom"
    },
    ScrollToBottomExit: {
        animationName: `$ScrollToBottomExit`,
        animationDuration: props => props.duration || `3500ms`,
        backgroundPosition: "center top"
    },
    "@keyframes ScrollToBottom": {
        "0%": {
            backgroundPosition: "center top",
        },
        "100%": {
            backgroundPosition: "center bottom",
        }
    },
    "@keyframes ScrollToBottomExit": {
        "0%": {
            backgroundPosition: "center bottom",
        },
        "100%": {
            backgroundPosition: "center top",
        }
    }
}))

function FeaturePanel(props) {
    const { image, title, description, subtitle, side, end, index, disableAnimation } = props
    const [exit, setExit] = useState(true)
    const classes = useStyles(props)

    if (side === "right" || isMobile) {
        return (
            <>

                <Grid item lg={5} md={6} xs={12}>
                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h4">
                            {index}. {title}
                        </Typography>
                        <Typography variant="subtitle1">
                            {description}
                        </Typography>
                        {subtitle ?
                            <>
                                <br />
                                <br />
                                <Typography variant="subtitle1">
                                    {subtitle}
                                </Typography>
                            </> : ""}
                    </Box>
                </Grid>
                <Grid item lg={7} md={6} xs={12}>
                    <Box
                        boxShadow={6}
                        image={image}
                        className={`${classes.ImageContainer} ${clsx(classes.ScrollToBottom, { [classes.ScrollToBottomExit]: exit })}`}
                        onMouseEnter={disableAnimation ? () => null : () => setExit(!exit)}
                    />
                </Grid>
                {end ? "" : <Grid item xs={12}><Divider /></Grid>}
            </>
        )
    }

    else
        return (
            <>
                <Grid item lg={7} md={6} xs={12}>
                    <Box
                        boxShadow={6}
                        image={image}
                        className={`${classes.ImageContainer} ${clsx(classes.ScrollToBottom, { [classes.ScrollToBottomExit]: exit })}`}
                        onMouseEnter={disableAnimation ? "" : () => setExit(!exit)}
                    />
                </Grid>
                <Grid item lg={5} md={6} xs={12}>
                    <Typography variant="h4">
                        {index}. {title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {description}
                    </Typography>
                </Grid>
                {end ? "" : <Grid item xs={12}><Divider /></Grid>}
            </>
        )
}

FeaturePanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.object,
    image: PropTypes.string.isRequired,
    height: PropTypes.string,
    duration: PropTypes.string,
    disableAnimation: PropTypes.bool
}

export { FeaturePanel }