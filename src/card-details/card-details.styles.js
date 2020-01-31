import { makeStyles } from '@material-ui/core/styles'
import img0 from '../../public/background-images/00.jpg'
import img1 from '../../public/background-images/01.jpg'
import img2 from '../../public/background-images/02.jpg'
import img3 from '../../public/background-images/03.jpg'
import img4 from '../../public/background-images/04.jpg'
import img5 from '../../public/background-images/05.jpg'
import img6 from '../../public/background-images/06.jpg'
import img7 from '../../public/background-images/07.jpg'
import img8 from '../../public/background-images/08.jpg'

export const randomBackground = () => {
  const images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ]
  const num = Math.floor(Math.random() * images.length)
  return images[num]
}

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
    fontFamily: 'Barlow',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    fontWeight: 15,
    fontSize: '1.1em',
    color: 'white',
  },

  detailsPage: {
    backgroundImage: `url(${randomBackground()})`,
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
  },

}))

export default useStyles
