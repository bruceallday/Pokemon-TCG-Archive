import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {

    },

    searchButton: {
        height: 65,
        borderRadius: 10,
        color: "white",
        "&:hover": {}
    },

    searchForm: {
        margin: 20
    },

    textField: {
        marginRight: 20,
        width: 500,
        borderRadius: 10,

        " & div": {
            fontFamily: "Barlow",
            color: "white",
            fontSize: "1.6em",
            borderRadius: 10
        },
        "& label": {
            fontFamily: "Barlow",
            color: "white",
            fontSize: "1.1em"
        },
        "& fieldset": {
            fontFamily: "Barlow",
            color: "white"
        }
    }
}));