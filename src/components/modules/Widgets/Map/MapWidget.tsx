import { FC, useEffect } from 'react';
// @ts-ignore
import { AppleMaps } from 'react-apple-mapkitjs';

export const MapWidget: FC = () => {
  return (
    <div>
      <AppleMaps
        token="your access token here"
      />
    </div>
  );
}
