import React from 'react'
import {Container, Title, Description, Organizer, PostsLabel} from './styles'
import {GapColumnDiv} from '../../commonStyles'

export const About = () => {
  return (
    <Container>
      <Organizer>
        <GapColumnDiv gap={3}>
          <Title>About</Title>
          <Description>
            Hi there! I’m José Lázaro, a Software Engineer based in Brazil.
            Currently I work with Typescript, ReactJS and React Native.
          </Description>
        </GapColumnDiv>
        <GapColumnDiv gap={3}>
          <Title>My lasted posts</Title>
          <PostsLabel>Entendendo a diferença entre null e undefined</PostsLabel>
          <PostsLabel>Quando utilizar rem, em ou pixel</PostsLabel>
        </GapColumnDiv>
        <GapColumnDiv gap={3}>
          <Title>Some projects</Title>
        </GapColumnDiv>
      </Organizer>
    </Container>
  )
}
