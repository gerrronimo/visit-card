import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    width: '100%',
    heigth: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  image: {
    width: '50%',
    height: '50%',
  }
})
