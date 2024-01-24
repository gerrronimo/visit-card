import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { useStyles } from './styles';

export interface ICardProps {
    width: number;
    height: number;
    className?: string;
}

export const Card: FC<PropsWithChildren<ICardProps>> = ({ width, height, children, className }) => {
    const classes = useStyles();

    return (
        <div style={{ width, height }} className={cx(classes.card, className)}>
            {children}
        </div>
    );
};
