import { FC, useCallback, useMemo, useState } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

import { WidgetButton } from '../../../shared/WidgetButton';
import { useStyles } from './styles';

enum ResizeActions {
  zoomIn = 'zoomIn',
  zoomOut = 'zoomOut',
}

export const MapWidget: FC = () => {
  const classes = useStyles();

  const [zoom, setZoom] = useState(8);

  const options = useMemo(() => ({
    center: [55.741421, 52.407999],
    zoom: zoom,
    controls: [],
    behaviors: [],
  }), [zoom]);

  const handleResize = useCallback((action: ResizeActions) => {
    action === ResizeActions.zoomIn ? setZoom(v => v + 6) : setZoom(v => v - 6);
  }, [setZoom])

  return (
    <>
      <YMaps query={{ lang: 'en_US', csp: true }}>
        <div className={classes.map}>
          {zoom < 12 && (
            <WidgetButton
              callback={() => handleResize(ResizeActions.zoomIn)}
              position="leftBottom"
              type="icon"
            > + </WidgetButton>
          )}
        
          <Map
            state={options}
            width={300}
            height={300}
          >
            <Placemark geometry={options.center} />
          </Map>

          {zoom > 6 && (
            <WidgetButton
              callback={() => handleResize(ResizeActions.zoomOut)}
              position="rightBottom"
              type="icon"
            > - </WidgetButton>
          )}
        </div>
      </YMaps>
    </>
  );
}
