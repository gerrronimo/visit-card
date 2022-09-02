import { Widget } from "../../shared/Widget";
import { WidgetTypes } from "../../shared/Widget";

export const Home = () => {
  return (
    <section>
      <Widget type={WidgetTypes.info} />
      <Widget type={WidgetTypes.map} />
    </section>
  )
}
