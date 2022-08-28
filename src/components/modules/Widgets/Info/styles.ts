import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  infoWidget: {
    position: 'relative',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  memoji: {
    width: 125,
    marginBottom: 16,
  },

  text: {
    fontSize: 20,
    letterSpacing: 1.2,
    lineHeight: '32px',
    color: '#232323',
    userSelect: 'none',

    '& span': {
      fontWeight: 700,
      fontSize: 28,
      color: '#000',
    }
  },

  button: {
    position: 'absolute',
    top: 32,
    right: 32,

    color: '#000',
    letterSpacing: 1,
    outline: '3px solid rgb(240 242 248)',
    transition: '.15s linear',

    padding: '12px 24px',
    borderRadius: 16,
    textDecoration: 'none',
    fontWeight: 500,

    '&:hover': {
      outline: '8px solid rgb(240 242 248)',
      transition: '.15s linear'
    }
  }
})
