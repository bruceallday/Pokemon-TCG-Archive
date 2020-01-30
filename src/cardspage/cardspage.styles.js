import { makeStyles } from '@material-ui/core/styles'
import img from '../../public/bgmatt.jpg'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${img})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    fontColor: 'white',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card: {
    width: 240,
    height: 330,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .2s ease-in-out',
    },
  },

}))

export default useStyles
