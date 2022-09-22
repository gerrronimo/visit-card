import { FC } from 'react';

import { WidgetButton } from '../../../shared/WidgetButton';
import { useStyles } from './styles';

export interface CasePreviewProps {
  image?: string
  url?: string
  label?: string
}

export const CasePreview: FC<CasePreviewProps> = (props) => {
  const classes = useStyles();
  const { image, url, label } = props;

  return (
    <div>
      <img src={image} alt="" className={classes.image} />

      {label && (
        <a href={url} target="_blank">
          <WidgetButton position="rightBottom" type="text">
            GitHub
          </WidgetButton>
        </a>
      )}
    </div>
  )
}
