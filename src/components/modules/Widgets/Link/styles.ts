import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  link: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 32,
  },

  image: {
    width: '50%',
    height: '50%',
  }
})
