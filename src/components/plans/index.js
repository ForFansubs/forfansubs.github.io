import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles'
import { Backdrop, Box, Fade, Modal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 300,
        margin: `0 ${theme.spacing(2)}px`,
        paddingTop: `${theme.spacing(2)}px!important`,
        boxShadow: theme.shadows[4],
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            width: "95%",
            marginBottom: props => props.last ? 0 : theme.spacing(4)
        }
    },
    CardContent: {
        padding: `${theme.spacing(2)}px ${theme.spacing(2)}px 0!important`
    },
    CardActions: {
        paddingBottom: `${theme.spacing(2)}px!important`,
    },
    media: {
        backgroundSize: "auto 140px",
        height: "140px",
        width: "90%"
    },
    titleText: {
        textAlign: "center",
        marginTop: theme.spacing(2)
    },
    centerText: {
        textAlign: "center"
    },
    paddingText: {
        padding: theme.spacing(2, 0)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        whiteSpace: "wrap",
        maxWidth: 600,
        [theme.breakpoints.down('md')]: {
            maxWidth: "initial",
            width: "95%"
        }
    },
}))

function PlansPanel(props) {
    const classes = useStyles(props)
    const { image, title, description, price, buttons, textBox } = props
    const [open, setOpen] = useState(false);

    function _handleOpen() {
        setOpen(true);
    };

    function _handleClose() {
        setOpen(false);
    };

    return (
        <>
            <Card className={classes.root}>
                <Box width="100%" display="flex" flexDirection="column" alignItems="center">
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <Typography gutterBottom variant="h4" component="h2" className={classes.titleText}>
                        {title}
                    </Typography>
                </Box>
                <CardContent className={classes.CardContent}>
                    <div>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.centerText}>
                            {description}
                        </Typography>
                        {typeof price === "number" ?
                            <Typography variant="h1" className={classes.centerText}>
                                {price}₺
                            </Typography>
                            :
                            <Typography variant="h4" className={`${classes.centerText} ${classes.paddingText}`}>
                                {price}
                            </Typography>}
                    </div>
                </CardContent>
                {buttons.length !== 0 ?
                    <CardActions className={classes.CardActions}>
                        {buttons.map(b => (
                            <Button key={b.title} variant="outlined" color="primary" href={b.link ? b.link : undefined} onClick={b.link ? undefined : _handleOpen} target="_blank">
                                {b.title}
                            </Button>
                        ))}
                    </CardActions>
                    :
                    ""
                }
            </Card>
            {textBox ?
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={_handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {textBox}
                        </div>
                    </Fade>
                </Modal>
                :
                ""}
        </>
    )
}

PlansPanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttons: PropTypes.array,
    textBox: PropTypes.object
}

export { PlansPanel }