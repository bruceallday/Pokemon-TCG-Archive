import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 99999,
  },

  searchButton: {
    zIndex: 99999,
    height: 65,
    borderRadius: 10,
  },

  searchForm: {
    margin: 20,
    zIndex: 99999,
  },

  textField: {
    marginRight: 20,
    width: 500,
    borderRadius: 10,
    zIndex: 99999,

    ' & div': {
      fontFamily: 'Barlow',
      color: 'white',
      fontSize: '1.6em',
      borderRadius: 10,
    },
    '& label': {
      fontFamily: 'Barlow',
      color: 'white',
      fontSize: '1.1em',
    },
    '& fieldset': {
      fontFamily: 'Barlow',
      color: 'white',
    },
  },
}))

export default useStyles
