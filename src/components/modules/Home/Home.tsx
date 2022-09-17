import { FC, useMemo } from 'react';

import { Widget, WidgetTypes } from '../../shared/Widget';
import { useStyles } from './styles';

export const Home: FC = () => {
  const classes = useStyles();

  const layout = useMemo(() => (`
    "${WidgetTypes.info} ${WidgetTypes.info} ${WidgetTypes.map} ${WidgetTypes.gitHub_link}"
    "${WidgetTypes.instagram_link} ${WidgetTypes.linkedIn_link} . ."
  `) , []);

  return (
    <section className={classes.section} style={{gridTemplateAreas: layout}}>
      <Widget type={WidgetTypes.info} />
      <Widget type={WidgetTypes.map} />

      <Widget type={WidgetTypes.gitHub_link} />
      <Widget type={WidgetTypes.instagram_link} />
      <Widget type={WidgetTypes.linkedIn_link} />
    </section>
  )
}
