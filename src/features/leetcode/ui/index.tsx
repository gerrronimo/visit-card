import React, { FC, useCallback, useEffect, useState } from 'react';
import { getLeetCodeStats } from '../api';
import { useStyles } from './styles';

export const LeetCode: FC = () => {
    const classes = useStyles();
    const [count, setCount] = useState<number>();

    const getStats = useCallback(async () => {
        const stats = await getLeetCodeStats();
        setCount(stats.totalSolved);
    }, []);

    useEffect(() => {
        getStats();
    }, [getStats]);

    return (
        <div className={classes.container}>
            <p className={classes.title}>{count}</p>
            <p className={classes.subTitle}>LeetCode problems solved</p>
        </div>
    );
};
