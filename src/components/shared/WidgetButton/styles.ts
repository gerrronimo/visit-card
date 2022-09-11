import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  button: {
    position: 'absolute',
    textDecoration: 'none',
    border: 'none',

    cursor: 'pointer',
    background: '#fff',

    margin: 16,
    borderRadius: 16,
    fontWeight: 400,
    zIndex: 5,

    color: '#000',
    letterSpacing: 1,
    transition: '.15s linear',
  },

  icon: {
    width: 32,
    height: 32,
    fontSize: 20,

    '&:hover': {
      background: 'rgb(240 242 248)',
      transition: '.15s linear',
    }
  },

  text: {
    padding: '8px 16px',
    outline: '3px solid transparent',

    '&:hover': {
      background: 'rgb(240 242 248)',
      outline: '6px solid rgb(240 242 248)',
      transition: '.15s linear'
    }
  }
})
