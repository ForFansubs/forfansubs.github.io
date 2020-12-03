import React from 'react'

import { HeaderLogo } from '../../config/assets/index'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import Tooltip from '../Tooltip'

const useStyles = makeStyles(theme => ({
    HeaderLogo: {
        display: "block",
        [theme.breakpoints.down('md')]: {
            width: "400px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "350px",
        },
        width: "450px"
    },
    HeaderText: {
        marginTop: `${theme.spacing(8)}px`,
        "& h1": {
            lineHeight: ".8"
        },
        "& span": {
            [theme.breakpoints.down('sm')]: {
                marginLeft: "-1.6em",
                fontSize: `${theme.typography.subtitle1.fontSize.replace('rem', '') - 0.2}rem`
            },
            marginLeft: "3.1em"
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    }
}))

export default () => {
    const classes = useStyles()

    return (
        <>
            <Box className={classes.HeaderText}>
                <img className={classes.HeaderLogo} src={HeaderLogo} alt="Header logo" />
                <Tooltip aria-label="add" title="Her şey derken daha geliştirilmesi devam eden bir proje olduğumuzu unutmayın." classes={classes}>
                    <Typography variant="subtitle1">İhtiyacınız olan her şey*. Bir yerde.</Typography>
                </Tooltip>
            </Box>
        </>
    )
}