import { makeStyles } from '@material-ui/core/styles'

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
}))

export default useStyles
