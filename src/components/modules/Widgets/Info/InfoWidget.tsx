import { FC } from 'react';
import { Link } from "react-router-dom";

import memoji from './memoji.png';
import { WidgetNodeProps } from '../../../shared/Widget'

import { useStyles } from "./styles";

export interface InfoWidgetProps extends WidgetNodeProps { }

export const InfoWidget: FC<InfoWidgetProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.infoWidget}>
      <img src={memoji} alt="memoji" className={classes.memoji} />

      <p className={classes.text}>
        Hi! I'm <span>Nikolay</span>, a frontend engineer. I'm developing on React, Node and TypeScript.
        Now working on commercial project and growing own startup.
      </p>

      <Link className={classes.button} to="/bio">View full bio</Link>
    </div>
  )
}
