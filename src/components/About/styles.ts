import styled from 'styled-components'
import {Colors} from '../../assets/colors'
import {GapColumnDiv, TitleLabel} from '../../commonStyles'
import {Constants} from '../../assets/constants'

export const Container = styled.div`
  background-color: ${Colors.white};
  width: 37.375rem;
  height: 28.5rem;
  border-radius: 10px;
`
export const Organizer = styled(GapColumnDiv)`
  padding: 27px 35px;
  gap: 8px;
`

export const Title = styled(TitleLabel)`
  font-weight: ${Constants.SEMIBOLD};

  &&:hover {
    color: ${Colors.blue};
  }
`

export const Description = styled.span`
  text-align: justify;
  font-size: 18px;
  font-weight: ${Constants.LIGHT};
`

export const PostsLabel = styled.span`
  cursor: pointer;
  font-weight: ${Constants.SEMIBOLD};
  font-size: 18px;
  color: ${Colors.black};

  &&:hover {
    color: ${Colors.purple};
  }
`
