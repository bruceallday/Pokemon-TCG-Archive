import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FD2A36"
  },

  title: {
    flexGrow: 1
  },

  links:{
      color: "white",
      fontSize: "2em",
      width: "10%",
      padding: 10,
  },

  logo:{
    width:'100%',
  }
}));
