import { FC, useMemo } from 'react';

import { InfoWidget, MapWidget } from '../../modules/Widgets';
import { LinkWidget } from '../../modules/Widgets/Link';
import { useStyles } from './styles';
import { WidgetProps, WidgetTypes } from './types';

export const Widget: FC<WidgetProps> = ({ type }) => {
  const classes = useStyles();

  const smallWidget = useMemo(() => ({
    style: {
      rows: 1,
      columns: 1,
    }
  }), []);

  const mediumWidget = useMemo(() => ({
    style: {
      rows: 1,
      columns: 2,
    }
  }), []);

  const hugeWidget = useMemo(() => ({
    style: {
      rows: 2,
      columns: 2,
    }
  }), []);

  const widgets = useMemo(() => ([
    {
      widgetType: WidgetTypes.info,
      Component: InfoWidget,
      props: { ...mediumWidget },
      clsx: `${classes.widget} ${classes.widgetContainer}`,
    }, {
      widgetType: WidgetTypes.map,
      Component: MapWidget,
      props: { ...smallWidget },
      clsx: classes.widget,
    }, {
      widgetType: WidgetTypes.link,
      Component: LinkWidget,
      props: { 
        ...hugeWidget,
        background: '#fff',
        url: 'https://github.com/gerrronimo',
        image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        label: 'https://github.com/gerrronimo',
      },
      clsx: classes.widget,
    }
  ]), [smallWidget, mediumWidget, hugeWidget]);

  return (
    <>
      {widgets.map(
        ({ widgetType, Component, props, clsx }) => {
          return type === widgetType && (
            <div
              className={clsx}
              style={{ width: props.style.columns * 300, height: props.style.rows * 300 }}
              key={widgetType}
            >
              <Component {...props} />
            </div>
          )
        })
      }
    </>
  );
}
