import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
         root: {
           backgroundImage:
             "url(' https://i.pinimg.com/originals/db/ae/df/dbaedf15b9f61d0fc040ad15bc7483e2.jpg')",
           backgroundAttachment: "fixed",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100%",
           fontColor: "white",
           display: "flex",
           minHeight: "100vh",
           flexDirection: "column",
           justifyContent: "space-between",
           alignItems: "center"
         },

         card: {
           width: 240,
           height: 330,
           "&:hover": {
             transform: "scale(1.1)",
             transition: "all .2s ease-in-out"
           }
         },

         grid: {
           height: "100%",
         }, 

}));