import React from 'react'
import styled from 'styled-components'
import ButLand from '../static/ButLand'
import hero1 from '../../assets/hero-bg-shape-cropped.png'
import hero2 from '../../assets/hero-illustration (1).png'


const Hero = () => {
  return (
    <div>
      <Container>
      <MainBG src={hero1}/>
        <Main>
            
            <Content>
            <TextPart>
                <BigText>Move fast, stay aligned, and build better - together</BigText>
                <SmallText> The #1 software development tool used by agile teams, Get it free!
</SmallText>
                <ButLand bg='rgb(44,83,204)' color='white' title='Get it free' />
                </TextPart>
                <SideImage src={hero2}/>
            </Content>
            
        </Main>
      </Container>
    </div>
  )
}


const TextPart = styled.div`
width: 600px;
margin-left: 700px;
`
const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const SideImage = styled.img`
height: 500px;
`
const BigText = styled.div`
font-size: 40px;
font-family: Oxygen;
font-weight: 700;

`
const SmallText = styled.div`
font-size: 20px;
margin: 20px 0px;
opacity: 0.7;
`
const Container = styled.div`
height: 80vh;
width: 100%;
position: relative;
overflow: hidden;
`
const Main = styled.div`
position: absolute;
top: 0px;
height: 100%;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
`
const MainBG = styled.img`
position: relative;
`

export default Hero
