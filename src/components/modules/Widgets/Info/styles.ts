import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Info: {
    gridArea: 'Info',
  },

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
    letterSpacing: 1.15,
    lineHeight: '32px',
    color: '#232323',
    userSelect: 'none',

    '& span': {
      fontWeight: 700,
      fontSize: 28,
      color: '#000',
    }
  },
})
