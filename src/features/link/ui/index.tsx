import React, { FC } from 'react';
import { ILinkProps } from '../model/types';
import { useStyles } from './styles';

export const Link: FC<ILinkProps> = ({ background, url, img }) => {
    const classes = useStyles();
    return (
        <button className={classes.container} style={{ background }} onClick={() => window.open(url, '_blank')}>
            <img src={img} alt="link-img" className={classes.image} />
        </button>
    );
};
