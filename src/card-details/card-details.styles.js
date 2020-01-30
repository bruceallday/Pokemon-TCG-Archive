import { makeStyles } from '@material-ui/core/styles'
import img from '../../public/detail-background.png'

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
    padding: 20,
  },

  detailsPage: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
  },
}))

export default useStyles
