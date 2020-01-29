import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
         root: {
           backgroundImage:
             "url(' https://cdn.wallpapersafari.com/23/62/5ut9XK.jpg')",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100%",
           height: "100%",
           display: "flex",
           flexDirection: "row",
           justifyContent: "center",
           alignItems: "center"
         },

         logo: {
           width: "70%"
         }
}));
