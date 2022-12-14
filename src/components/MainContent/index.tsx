import React from 'react'
import {
  CenteredGapColumnDiv,
  GapColumnDiv,
  ResponsiveCenteredDiv,
} from '../../commonStyles'
import {Description, Detail, NameLabel, SmallLink, Title} from './styles'
import CommonDivider from '../CommonDivider'

const renderPersonalData = () => {
  return (
    <CenteredGapColumnDiv gap={20}>
      <CenteredGapColumnDiv gap={0}>
        <NameLabel>LÁZARO OLIVEIRA</NameLabel>
        <Detail>Software Engineer</Detail>
        <CommonDivider />
      </CenteredGapColumnDiv>
      <Description>
        Hi there! I’m José Lázaro, a Software Engineer based in Brazil.
        Currently I work with <span>Typescript, ReactJS and React Native.</span>
      </Description>
      <SmallLink>see more about me</SmallLink>
    </CenteredGapColumnDiv>
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
  return <ResponsiveCenteredDiv>{renderPersonalData()}</ResponsiveCenteredDiv>
}
