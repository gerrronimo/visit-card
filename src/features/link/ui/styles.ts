import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        border: 'none',
        padding: 32,
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: 'inherit',
        objectFit: 'contain',
    },
});
