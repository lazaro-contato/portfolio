import React from 'react'
import {GapColumnDiv, GapRowDiv} from '../../commonStyles'
import {Description, Detail, Image, NameLabel, SmallLink, Title} from './styles'
import {Images} from '../../assets/images'

const renderPersonalData = () => {
  return (
    <GapRowDiv gap={18}>
      <Image src={Images.personalImage} />
      <GapColumnDiv gap={8}>
        <GapColumnDiv gap={0}>
          <NameLabel>LÁZARO OLIVEIRA</NameLabel>
          <Detail>Software Engineer</Detail>
        </GapColumnDiv>
        <Description>
          Hi there! I’m José Lázaro, a Software Engineer based in Brazil.
          Currently I work with Typescript, ReactJS and React Native.
        </Description>
      </GapColumnDiv>
    </GapRowDiv>
  )
}

const renderPostsList = () => {
  return (
    <div>
      <GapColumnDiv gap={12}>
        <Title>MY LASTED POSTS</Title>
        <GapColumnDiv>
          <Description>
            Entendendo a diferença entre null e undef...
          </Description>
          <Description>Quando utilizar rem, em ou pixel</Description>
          <Description>Gerenciamento de estado com useContext</Description>
        </GapColumnDiv>
        <SmallLink>READ ALL POSTS</SmallLink>
      </GapColumnDiv>
    </div>
  )
}

export const MainContent = () => {
  return (
    <GapColumnDiv gap={40}>
      {renderPersonalData()}
      {renderPostsList()}
    </GapColumnDiv>
  )
}
