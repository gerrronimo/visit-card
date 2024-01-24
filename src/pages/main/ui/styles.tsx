import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        height: '100%',
        background: '#ECECEB',
    },
    container: {
        width: 1920,
        height: 1080,
        transformOrigin: 'top left',
        padding: '16px 16px 0 16px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        height: 1048,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    column1: {
        width: 680,
        // background: 'green',
    },
    column2: {
        width: 488,
        // background: 'blue',
    },
    column3: {
        width: 680,
        // background: 'orange',
    },
    activities: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
