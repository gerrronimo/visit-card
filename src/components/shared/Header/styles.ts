import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  header: {
    margin: '25px 0',
    padding: '25px 0',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  link: {
    color: '#000',
    fontWeight: 500,
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '1.5px',
    textDecoration: 'none',
    transition: '.2s linear',

    '&:hover': {
      color: '#727272',
      transition: '.2s linear',
    },
  },

  image: {
    width: '150px',
  },
})
