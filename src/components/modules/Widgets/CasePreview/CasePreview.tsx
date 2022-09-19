import { FC } from 'react';

import { useStyles } from './styles';

export interface CasePreviewProps {
  image?: string
  url?: string
}

export const CasePreview: FC<CasePreviewProps> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <a href={props.url}>
        <img src={props.image} alt="" className={classes.image} />
      </a>
    </div>
  )
}
