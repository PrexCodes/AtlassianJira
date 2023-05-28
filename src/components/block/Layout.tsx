import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
// import Head from '../reUse/inputs/header'


const Layout = () => {
    return (
        <Container>
            {/* <Head/> */}
            <Outlet />
        </Container>
    )
}

export default Layout

const Container = styled.div`
background-image: url(./assets/und.png);
background-repeat: no-repeat;
`