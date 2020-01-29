import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
         root: {
           backgroundImage:
             "url(' https://i.pinimg.com/originals/db/ae/df/dbaedf15b9f61d0fc040ad15bc7483e2.jpg')",
           backgroundAttachment: "fixed",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100%",
           fontColor: "white",
           height: "100%",
           display: "flex",
           flexDirection: "column",
           justifyContent: "space-between",
           alignItems: "center"
         },

         searchButton: {
           backgroundColor: "#FD2A36",
           height: 65,
           borderRadius: 20,
           color: "white",
           marginLeft: 20,
           "&:hover": {
             backgroundColor: "#C7040E"
           }
         },

         searchForm: {
           margin: 20
         },

         card: {
           "&:hover": {
             transform: "scale(1.1)",
             transition: "all .2s ease-in-out"
           }
         },

         grid: {
           
         },

         textField: {
           backgroundColor: "#FD2A36",
           width: 500,
           borderRadius: 20,

           " & div": {
             fontFamily: "Barlow",
             color: "white",
             fontSize: "1.6em",
             borderRadius: 20
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