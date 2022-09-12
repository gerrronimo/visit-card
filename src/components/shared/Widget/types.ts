export enum WidgetTypes {
  info = 'info',
  map = 'map',
  link = 'link'
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
