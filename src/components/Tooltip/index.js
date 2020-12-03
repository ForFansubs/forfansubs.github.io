import { makeStyles, Tooltip } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[6],
        fontSize: ".875rem",
        fontWeight: "bold",
        margin: theme.spacing(1, 0),
        color: theme.palette.getContrastText(theme.palette.background.paper)
    }
}))

export default function CustomTooltip(props) {
    const classes = useStyles()
    return (
        <>
            <Tooltip aria-label={props["aria-label"]} title={props.title} classes={{ tooltip: classes.tooltip }}>
                {props.children}
            </Tooltip>
        </>
    )
}