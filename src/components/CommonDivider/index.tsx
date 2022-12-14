import React, {CSSProperties} from 'react'
import {Colors} from '../../assets/colors'
import {Divider, Title} from './styles'

interface CommonDividerProps {
  margin?: number
  /* A key from Colors object. */
  color?: keyof typeof Colors
  style?: CSSProperties
  title?: string
  variant?: 'cardDivider' | 'listDivider'
}

const CommonDivider = ({
  margin,
  color,
  style,
  title,
  variant = 'cardDivider',
}: CommonDividerProps): JSX.Element => {
  return title ? (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Divider
        marginValue={margin}
        color={color}
        style={style}
        variant={variant}
      />
      <Title>{title}</Title>
      <Divider
        marginValue={margin}
        color={color}
        style={style}
        variant={variant}
      />
    </div>
  ) : (
    <Divider
      marginValue={margin}
      color={color}
      style={style}
      variant={variant}
    />
  )
}

export default CommonDivider
