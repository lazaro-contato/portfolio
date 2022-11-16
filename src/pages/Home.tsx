import React from 'react'
import {Centralizer, HomeLayout} from './styles'
import {MainContent} from '../components/MainContent'

export const Home = () => {
  return (
    <HomeLayout>
      <Centralizer>
        <MainContent />
      </Centralizer>
    </HomeLayout>
  )
}
