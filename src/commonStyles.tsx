import styled from 'styled-components'
import {Colors} from './assets/colors'

const DEFAULT_TITLE_LABEL_SIZE = 18

interface LabelProps {
  fontSize?: number
}

export const TitleLabel = styled.span<LabelProps>`
  font-size: ${({fontSize}) => fontSize || DEFAULT_TITLE_LABEL_SIZE}px;
  color: ${Colors.purple};
`

//--------- DIVS --------- //

export const RelativeDiv = styled.div`
  position: relative;
`

export const AbsoluteDiv = styled.div`
  position: absolute;
`

export const FlexedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpacedDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FlexStartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const FlexEndDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const CenterSpacedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CenterAlignDiv = styled.div`
  display: flex;
  align-items: center;
`

export const ColumnFlexedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ClickableElement = styled.button`
  cursor: pointer;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
`

interface GapDivProps {
  gap?: number
  width?: string
}

export const GapColumnDiv = styled.div<GapDivProps>`
  display: flex;
  width: ${({width}) => width || 'initial'};
  gap: ${({gap}) => (gap ? `${gap}px` : 'initial')};
  flex-direction: column};
`

export const GapRowDiv = styled.div<GapDivProps>`
  display: flex;
  width: ${({width}) => width || 'initial'};
  gap: ${({gap}) => (gap ? `${gap}px` : 'initial')};
  flex-direction: row;
`

export const CenteredGapColumnDiv = styled.div<GapDivProps>`
  display: flex;
  align-items: center;
  width: ${({width}) => width || 'initial'};
  gap: ${({gap}) => (gap ? `${gap}px` : 'initial')};
  flex-direction: column;
`

export const CenteredGapRowDiv = styled.div<GapDivProps>`
  display: flex;
  align-items: center;
  width: ${({width}) => width || 'initial'};
  gap: ${({gap}) => (gap ? `${gap}px` : 'initial')};
  flex-direction: row;
`

export const ResponsiveCenteredDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveHorizontalCenteredDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
