import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 82,
        fontWeight: 800,
        textAlign: 'center',
        color: '#00df62',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 500,
    },
});
