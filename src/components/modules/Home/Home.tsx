import { Widget, WidgetTypes } from '../../shared/Widget';
import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Widget type={WidgetTypes.info} />
      <Widget type={WidgetTypes.map} />

      <Widget type={WidgetTypes.gitHub_link} />
      <Widget type={WidgetTypes.instagram_link} />
      <Widget type={WidgetTypes.linkedIn_link} />
    </section>
  )
}
