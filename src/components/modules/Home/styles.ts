import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  section: {
    display: 'grid',
    gridTemplateColumns: '300px 300px 300px 300px',
    gridTemplateRows: '300px 300px 300px 300px',
    gap: '20px 20px',
  }
});
