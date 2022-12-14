import styled from 'styled-components'
import {CSSProperties} from 'react'
import {Colors} from '../../assets/colors'

const OPACITY_VALUE = 0.11

export const Divider = styled.div<{
  marginValue?: number
  color?: keyof typeof Colors
  style?: CSSProperties
  variant?: 'cardDivider' | 'listDivider'
}>`
  width: 100%;
  border-bottom: ${({color}) =>
    color ? `1px solid ${Colors[color]}` : `1px solid ${Colors.purple}`};
  opacity: ${({variant}) => (variant === 'cardDivider' ? OPACITY_VALUE : 1)};
  margin: ${({marginValue}) => (marginValue ? `${marginValue}px 0` : '0')};
`

export const Title = styled.div`
  padding: 0 1.375rem; //22px
  color: ${Colors.black};
  font-size: 0.9375rem; //15px
`
