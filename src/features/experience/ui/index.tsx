import React, { FC } from 'react';
import { useStyles } from './styles';

export const Experience: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.position}>
                <p className={classes.title}>Sber</p>
                <p className={classes.subTitle}>Middle Frontend-engineer</p>
                <p className={classes.dates}>October 2022 - present time</p>
            </div>
            <div>
                <p className={classes.title}>Everytale</p>
                <p className={classes.subTitle}>Junior Frontend-engineer</p>
                <p className={classes.dates}>October 2022 - September 2021</p>
            </div>
        </div>
    );
};
