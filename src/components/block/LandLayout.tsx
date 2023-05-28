import React from 'react'
import Header from './Header'
// import Footer from './Footer'
import View from '../../pages/View'
import styled from 'styled-components'
// import { Outlet } from 'react-router-dom'

const LandLayout = () => {
  return (
    <Container> 
      <Header/>
      <View/>
      {/* <Footer/> */}

    </Container>
  )
}

export default LandLayout

const Container = styled.div`
background-color: white;


`