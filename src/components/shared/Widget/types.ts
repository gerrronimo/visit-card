import { FC, ReactFragment } from 'react';

import { LinkProps } from '../../modules/Widgets';
import { CasePreviewProps } from '../../modules/Widgets/CasePreview';

export enum WidgetTypes {
  info = 'info',
  map = 'map',

  gitHub_link = 'gh_link',
  linkedIn_link = 'linkedIn_link',
  instagram_link = 'instagram_link',

  rick_morty_case = 'rick_morty_case',
}

export interface WidgetProps {
  type: WidgetTypes
}

export interface WidgetType {
  widgetType: WidgetTypes
  Component: any,
  clsx: string,
  props: LinkProps | CasePreviewProps
}

export interface WidgetNodeProps {
  style: {
    columns: number,
    rows: number,
  }
}
