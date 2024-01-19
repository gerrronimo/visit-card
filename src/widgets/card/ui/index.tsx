import React, { FC, PropsWithChildren } from 'react';
import { useStyles } from './styles';

export interface ICardProps {
    width: number;
    height: number;
}

export const Card: FC<PropsWithChildren<ICardProps>> = ({ width, height, children }) => {
    const classes = useStyles();
    return (
        <div style={{ width, height }} className={classes.card}>
            {children}
        </div>
    );
};
