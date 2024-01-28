import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        padding: 32,
    },
    position: {
        marginBottom: 24,
    },
    title: {
        fontWeight: 900,
        fontSize: 64,
        color: '#00df62',
    },
    subTitle: {
        fontWeight: 600,
        fontSize: 32,
        marginBottom: 8,
        color: '#323333',
    },
    dates: {
        width: '100%',
        color: '#525252',
        fontSize: 22,
    },
});
