import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
         root: {
           backgroundImage:
             "url(' https://i.pinimg.com/originals/db/ae/df/dbaedf15b9f61d0fc040ad15bc7483e2.jpg')",
           backgroundAttachment: "fixed",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100%",
         },

         card: {
           "&:hover": {
             transform: "scale(1.1)",
             transition: 'all .2s ease-in-out',
           }
         },
       }));