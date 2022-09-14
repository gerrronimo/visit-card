export enum WidgetTypes {
  info = 'info',
  map = 'map',
  gitHub_link = 'gh_link',
  linkedIn_link = 'linkedIn_link',
  instagram_link = 'instagram_link',
}

export interface WidgetProps {
  type: WidgetTypes
}

export interface WidgetNodeProps {
  style: {
    columns: number,
    rows: number,
  }
}
