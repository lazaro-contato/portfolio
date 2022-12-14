import React, {useState} from 'react'
import {Container, DropDownMenu, MenuContainer, MenuLabel} from './styles'

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const toggleHeaderMenu = () => {
    setIsMenuActive(!isMenuActive)
  }
  const renderMenu = () => {
    return (
      <MenuContainer>
        <MenuLabel onClick={toggleHeaderMenu}>menu</MenuLabel>
        <DropDownMenu isActive={isMenuActive}>
          <span>home</span>
          <span>about</span>
          <span>portfolio</span>
          <span>contact</span>
        </DropDownMenu>
      </MenuContainer>
    )
  }

  return <Container>{renderMenu()}</Container>
}
