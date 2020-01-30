import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

  root: {
    background: '#999',
  },

  studentname: {
    color: 'red',
    fontWeight: 100,

    '&:hover': {
      color: '#ccc',
    },

    '@media(min-width: 600px)': {
      studentname: {
        fontSize: 20,
      },
    },
  },
})

export default useStyles
