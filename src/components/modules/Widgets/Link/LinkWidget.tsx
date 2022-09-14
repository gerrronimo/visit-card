import { FC } from 'react';

import { useStyles } from './styles';

export interface LinkProps {
  background?: string,
  image?: string,
  url?: string,
  label?: string,
}

export const LinkWidget: FC<LinkProps> = ({ background, image, url = '#', label }) => {
  const classes = useStyles();

  return (
    <a href={url} target="_blank" className={classes.link} style={{background}}>
      <img src={image} alt={label} className={classes.image} />
    </a>
  )
}
