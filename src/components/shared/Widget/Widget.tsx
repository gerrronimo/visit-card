import { FC, useMemo } from 'react';

import { InfoWidget, MapWidget } from '../../modules/Widgets';
import { LinkWidget } from '../../modules/Widgets/Link';
import { useStyles } from './styles';
import { WidgetProps, WidgetTypes } from './types';

export const Widget: FC<WidgetProps> = ({ type }) => {
  const classes = useStyles();

  const widgets = useMemo(() => ([
    {
      widgetType: WidgetTypes.info,
      Component: InfoWidget,
      clsx: `${classes.widget} ${classes.widgetContainer}`,
      props: {},
    }, {
      widgetType: WidgetTypes.map,
      Component: MapWidget,
      clsx: classes.widget,
      props: {},
    }, {
      widgetType: WidgetTypes.gitHub_link,
      Component: LinkWidget,
      props: {
        background: '#fff',
        url: 'https://github.com/gerrronimo',
        image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        label: 'Nikolay Chumakov - GitHub Profile Link',
      },
      clsx: classes.widget,
    }, {
      widgetType: WidgetTypes.linkedIn_link,
      Component: LinkWidget,
      props: {
        background: '#0471AE',
        url: 'https://www.linkedin.com/in/nikolay-chumakov-6a66391a4',
        image: '/linkedin.png',
        label: 'Nikolay Chumakov - LinkedIn Profile',
      },
      clsx: classes.widget,
    }, {
      widgetType: WidgetTypes.instagram_link,
      Component: LinkWidget,
      props: {
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        url: 'https://instagram.com/chumak0f',
        image: 'https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png',
        label: 'Nikolay Chumakov - Instagram Profile',
      },
      clsx: classes.widget,
    }
  ]), []);

  return (
    <>
      {widgets.map(
        ({ widgetType, Component, props, clsx }) => {
          return type === widgetType && (
            <div
              className={clsx}
              style={{ gridArea: widgetType }}
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
