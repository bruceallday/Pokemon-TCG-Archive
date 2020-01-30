import { makeStyles } from '@material-ui/core/styles'

import img from '../../public/pokemon-backgrounds-6.jpg'

export const useStyles = makeStyles(() => ({
  root: {
    backgroundImage:
             `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '50%',
  },
}))

export default useStyles
