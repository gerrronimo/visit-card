import { Widget, WidgetTypes } from '../../shared/Widget';

export const Home = () => {
  return (
    <section>
      <Widget type={WidgetTypes.info} />
      <Widget type={WidgetTypes.map} />

      <Widget type={WidgetTypes.gitHub_link} />
      <Widget type={WidgetTypes.instagram_link} />
      <Widget type={WidgetTypes.linkedIn_link} />
    </section>
  )
}
