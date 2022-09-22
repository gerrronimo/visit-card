import { FC, ReactNode, useMemo } from 'react';

import { useStyles } from './styles';

export interface WidgetButtonProps {
  position?: WidgetButtonPositions | 'leftBottom' | 'leftTop' | 'rightBottom' | 'rightTop'
  callback?: () => void
	children: ReactNode
	type: 'icon' | 'text'
}

export enum WidgetButtonPositions {
  leftBottom = 'leftBottom',
  leftTop = 'leftTop',
  rightBottom = 'rightBottom',
  rightTop = 'rightTop'
}

export const WidgetButton: FC<WidgetButtonProps> = ({
  position = WidgetButtonPositions.rightBottom,
  children,
  callback = () => {},
	type
}) => {
  const classes = useStyles();

	const buttonPosition = useMemo(() => {
		switch (position) {
			case WidgetButtonPositions.leftBottom:
				return {
					left: 0,
					bottom: 0,
				}

			case WidgetButtonPositions.leftTop:
				return {
					left: 0,
					top: 0,
				}

			case WidgetButtonPositions.rightBottom:
				return {
					right: 0,
					bottom: 0,
				}

			case WidgetButtonPositions.rightTop:
				return {
					right: 0,
					top: 0,
				}
		}
	}, [position]);
    
  return (
    <button
			onClick={callback}
			className={`${classes.button} ${type === 'icon' ? classes.icon : classes.text}`}
			style={buttonPosition}
		>
      {children}
    </button>
  )
}
