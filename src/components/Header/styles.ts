import styled from 'styled-components'
import {Colors} from '../../assets/colors'
import {CenterAlignDiv} from '../../commonStyles'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`

export const MenuContainer = styled(CenterAlignDiv)`
  position: relative;
  width: 120px;
  justify-content: center;

  transition: display 2s ease-out;

  &:hover div {
    display: flex;
  }
`

export const MenuLabel = styled.span`
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 40px;
  color: ${Colors.blue};
  transition: letter-spacing 0.5s ease-out, font-weight 0.5s ease-out;
  cursor: pointer;

  &&:hover {
    letter-spacing: 2px;
  }
`

export const DropDownMenu = styled.div<{isActive: boolean}>`
  position: absolute;
  display: ${({isActive}) => (isActive ? 'flex' : 'none')};
  top: 55px;
  width: 150px;
  left: -13%;
  flex-direction: column;
  align-items: center;

  transition: display 10s ease-out;

  span {
    font-size: 30px;
    color: ${Colors.black};
  }
`
