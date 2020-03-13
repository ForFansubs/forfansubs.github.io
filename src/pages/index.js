import React from 'react'

import Technologies from './technologies'
import Features from './features'
import Users from './users'
import Plans from './plans'

import { Grid, Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    Grid: {
        marginTop: `${theme.spacing(8)}px`
    },
    Titles: {
        marginLeft: `${theme.spacing(4)}px`
    }
}))

function GridProps(classes) {
    return ({
        item: true,
        md: 11,
        xs: 12,
        className: classes.Grid
    })
}

const BoxProps = {
    boxShadow: 6,
    p: 4,
    bgcolor: "background.paper"
}

export default () => {
    const classes = useStyles()
    const useGridProps = GridProps(classes)

    return (
        <>
            <Grid {...useGridProps}>
                <Box {...BoxProps} bgcolor="transparent" boxShadow={0}>
                    <Technologies />
                </Box>
                <Typography style={{ textAlign: "center" }} variant="h4">
                    kullanılarak hazırlandı.
                </Typography>
            </Grid>
            <Grid {...useGridProps}>
                <Typography className={classes.Titles} variant="h3">
                    Özellikler
                </Typography>
                <Box {...BoxProps}>
                    <Features />
                </Box>
            </Grid>
            <Grid {...useGridProps}>
                <Box {...BoxProps} bgcolor="transparent" boxShadow={0}>
                    <Users />
                </Box>
                <Typography style={{ textAlign: "center" }} variant="h4">
                    grupları, FFs sistemini kullanıyor.
                </Typography>
            </Grid>
            <Grid {...useGridProps}>
                <Typography className={classes.Titles} variant="h3">
                    Planlar
                </Typography>
                <Box {...BoxProps}>
                    <Plans />
                </Box>
            </Grid>
        </>
    )
}