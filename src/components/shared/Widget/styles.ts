import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  widget: {
    height: 'min-content',
    width: 'min-content',
    background: '#fff',
    borderRadius: 32,
    margin: 16,

    '& div': {
      padding: 32,
    }
  },
})
