import styled from 'styled-components'
import {TitleLabel} from '../../commonStyles'
import {Constants} from '../../assets/constants'
import {Colors} from '../../assets/colors'

export const Container = styled.div``

export const Image = styled.img`
  width: 150px;
`

export const NameLabel = styled.span`
  text-align: justify;
  font-size: 30px;
  font-weight: ${Constants.SEMIBOLD};
`

export const Title = styled(TitleLabel)`
  font-weight: ${Constants.SEMIBOLD};

  &&:hover {
    color: ${Colors.blue};
  }
`

export const Detail = styled.span`
  text-align: justify;
  font-size: 13px;
  font-weight: ${Constants.LIGHT};
  color: ${Colors.blue};
`

export const Description = styled.span`
  text-align: justify;
  font-size: 18px;
  font-weight: ${Constants.LIGHT};
`

export const SmallLink = styled.a`
  text-align: justify;
  font-size: 13px;
  font-weight: ${Constants.SEMIBOLD};

  &&:hover {
    color: ${Colors.blue};
  }
`
