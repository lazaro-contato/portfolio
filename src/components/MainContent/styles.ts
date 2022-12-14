import styled from 'styled-components'
import {TitleLabel} from '../../commonStyles'
import {Constants} from '../../assets/constants'
import {Colors} from '../../assets/colors'

export const Container = styled.div``

export const Image = styled.img`
  width: 150px;
`

export const NameLabel = styled.span`
  font-size: 150px;
  font-weight: ${Constants.SEMIBOLD};
  text-align: center;
  line-height: 140px;
`

export const Title = styled(TitleLabel)`
  font-weight: ${Constants.SEMIBOLD};

  &&:hover {
    color: ${Colors.blue};
  }
`

export const Detail = styled.span`
  text-align: justify;
  font-size: 50px;
  font-weight: ${Constants.LIGHT};
  color: ${Colors.blue};

  transition: letter-spacing 0.5s ease-out, font-weight 0.5s ease-out;

  &:hover {
    font-weight: ${Constants.SEMIBOLD};
    letter-spacing: 3px;
  }
`

export const Description = styled.span`
  text-align: center;
  font-size: 25px;
  font-weight: ${Constants.LIGHT};
  max-width: 850px;

  span {
    font-weight: ${Constants.SEMIBOLD};
  }
`

export const SmallLink = styled.a`
  color: ${Colors.blue};
  text-align: justify;
  font-size: 30px;
  font-weight: ${Constants.REGULAR};
  transition: letter-spacing 0.5s ease-out, font-weight 0.5s ease-out;

  &&:hover {
    letter-spacing: 0.5px;
  }
`
