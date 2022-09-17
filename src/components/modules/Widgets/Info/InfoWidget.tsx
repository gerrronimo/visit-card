import { FC } from 'react';
import { Link } from 'react-router-dom';

import { WidgetButton } from '../../../shared/WidgetButton';
import memoji from './memoji.png';
import { useStyles } from './styles';

export const InfoWidget: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.infoWidget}>
      <img src={memoji} alt="memoji" className={classes.memoji} />

      <p className={classes.text}>
        Hi! I'm <span>Nikolay</span>, a frontend engineer. I'm developing on React, Node and TypeScript.
        Now working on commercial project and growing own startup.
      </p>

      <WidgetButton
        type="text"
        position='rightTop'
      >
        <Link to="/bio">View full bio</Link>
      </WidgetButton>
    </div>
  )
}
