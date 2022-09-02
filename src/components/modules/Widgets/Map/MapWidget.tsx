import { FC, useCallback, useMemo, useState } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useStyles } from './styles';

export const MapWidget: FC = () => {
  const classes = useStyles();

  const [zoom, setZoom] = useState(6);

  const options = useMemo(() => ({
    center: [55.741421, 52.407999],
    zoom: zoom,
    controls: [],
    behaviors: [],
  }), [zoom]);

  return (
    <>
      <YMaps query={{ lang: 'en_US', csp: true }}>
        <div className={classes.map}>
          <Map
            state={options}
            width={300}
            height={300}
          >
            <Placemark geometry={options.center} />
          </Map>
        </div>
      </YMaps>
    </>
  );
}
