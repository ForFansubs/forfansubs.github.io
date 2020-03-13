import React from 'react'
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 300,
        margin: `0 ${theme.spacing(2)}px`,
        paddingTop: `${theme.spacing(2)}px!important`,
        boxShadow: theme.shadows[4]
    },
    CardContent: {
        padding: `${theme.spacing(2)}px ${theme.spacing(2)}px 0!important`
    },
    CardActions: {
        paddingBottom: `${theme.spacing(2)}px!important`
    },
    media: {
        backgroundSize: "auto 140px",
        boxShadow: theme.shadows[2],
        height: "140px",
        width: "90%"
    },
    centerText: {
        textAlign: "center"
    }
}))

function PlansPanel(props) {
    const classes = useStyles()
    const { image, title, description, price, buttons } = props

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h4" component="h2" className={classes.centerText}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.centerText}>
                        {description}
                    </Typography>
                    <Typography variant="h1" className={classes.centerText}>
                        {price}₺
                    </Typography>
                </CardContent>
                {buttons.length !== 0 ?
                    <CardActions className={classes.CardActions}>
                        {buttons.map(b => (
                            <Button key={b.title} color="primary" href={b.link} target="_blank">
                                {b.title}
                            </Button>
                        ))}
                    </CardActions>
                    :
                    ""
                }
            </Card>
        </>
    )
}

PlansPanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    buttons: PropTypes.array,
}

export { PlansPanel }