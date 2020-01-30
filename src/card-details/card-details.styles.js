import { makeStyles } from '@material-ui/core/styles'
import img from '../../public/detail-background.png'

const useStyles = makeStyles(() => ({
  root: {
    color: "white"
  },

  cardImage: {
    width: 450,
    height: 740
  },

  detailsContainer: {
    padding: "160 0 0 50",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  cardDetails: {
    width: "40vw",
    fontFamily: "Barlow",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontWeight: 15,
    fontSize: "1.1em",
    color: "white"
  },

  detailsPage: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    height: "100vh",
    width: "100%"
  }
}));

export default useStyles
