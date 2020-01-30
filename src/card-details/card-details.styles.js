import { makeStyles } from '@material-ui/core/styles'
import img from '../../public/pokemon-bg.jpg'

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
  },

  cardImage: {
    width: 450,
    height: 740,
  },

  detailsContainer: {
    padding: '160 0 0 50',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  cardDetails: {
    width: '40vw',
    backgroundColor: 'red',
  },

  detailsPage:{
      backgroundImage: `url(${img})`,
  }
}))

export default useStyles
