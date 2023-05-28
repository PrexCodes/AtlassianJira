import React from 'react'
import styled from 'styled-components'
import { Prom } from './Prom'
import vid1 from '../../assets/JSW-Plan.webm'
import quot from '../../assets/quote.svg'
import quot2 from '../../assets/MeuJoined.png'
import ill1 from '../../assets/illustrations-spot-Agile.svg'
import ill2 from '../../assets/illustrations-spot-Bug.svg'
import ill3 from '../../assets/illustrations-spot-JIRA Board.svg'
import ill4 from '../../assets/devops-spot-logo.svg'
import san from '../../assets/workflow (1).png'
import san1 from '../../assets/InDan.png'
import san2 from '../../assets/DevOps.png'
import ButLand from '../static/ButLand'
import devops from '../../assets/devops-diagram-compressed (1).png'
import flo from '../../assets/FLO_logo_horizontal_white 1.png'
import Numb1 from '../../assets/number-one.svg'
import wuru1 from '../../assets/wuru1.png'
import wuru2 from '../../assets/wuru2.png'
import wuru3 from '../../assets/wuru3.png'


const VideoPart = () => {
    const cards = [
        {name: "Scrum", image: ill1},
        {name: "Kanban", image: ill2},
        {name: "Bug tracking", image: ill3},
        {name: "DevOps", image: ill4}
    ]
    

  return (
    <div>
        <Prom/>
      <Container>
        <Main>
            <TiText>All from a single source of truth</TiText>
            <Menus>
                <Menu>Plan</Menu>
                <Menu>Track</Menu>
                <Menu>Release</Menu>
                <Menu>Report</Menu>
                <Menu>Automate</Menu>
            </Menus>
            <Content>
                <TexPart> 
                    <BigText>
                        Plan
                    </BigText>
                    <SmText>
                    Break the big ideas down into manageable chunks across teams with user stories, issues, and tasks.
                    </SmText>

                    <ImgQuo src={quot}/>
                    <Quo> Work becomes a lot more visible when it’s all in one place. It makes collaboration a whole lot easier.</Quo>

                    <Name>JEFF LAI</Name>
                    <Posi>INTERNAL INFRASTRUCTURE,</Posi>
                    <Posi>CANVA</Posi>
                </TexPart>
                <Vids src={vid1} /*autoPlay muted loop playsInline*//>
            </Content>
        </Main>
      </Container>      <Container2>
        <Main>
            <BigText> Easier than ever</BigText>
            <ImgQuo src={quot2}/>
            <Con>
            <Side>
                <MidText>Templates give you a head start</MidText>
                <SmTexts>Get started with ready-made templates</SmTexts>
                {cards.map((el)=>{

                    return(
                        <Card>
                    <Holder>
                        <ImgS src={el.image}/>
                    </Holder>
                    <SmTexs>{el.name}
                    <LinkText>
                    Learn More  
                    </LinkText>
                    </SmTexs>
                    
                </Card>
                    )
                })}
                <TDiv>
                <ImgQuo src={quot}/>
                    <Quo> Work becomes a lot more visible when it’s all in one place. It makes collaboration a whole lot easier.</Quo>

                    <Name>JEFF LAI</Name>
                    <Posi>INTERNAL INFRASTRUCTURE,</Posi>
                    <Posi>CANVA</Posi>
                </TDiv>
            </Side>
            <Side>
                <MidText>Then customize as you grow</MidText>
                <SmTexts>Jira adapts to the way you work, not the other way around. Start simple, customize as you go. </SmTexts>
                <ImgQuo src={san} height={'650px'}/>
                
            </Side>

            
            </Con>
        </Main>
        </Container2>
        <Container3>
            <GloImg src={san1}/>
                <HoldText>
                    <BigText style={{fontSize: '30px'}}>
                    We believe in open relationships
                    </BigText>
                    <SmText style={{width: '70%'}}>
                    If your team uses it, we integrate with it. Easily add your tools from the Atlassian Marketplace, keeping Jira as your central source of truth.
                    </SmText>
                    <ButLand bg='white' title='Explore integrations'/>
                </HoldText>
            <GloImg src={san2}/>
        </Container3>
        <Container4>
            <Main style={{flexDirection: 'row'}}>
                <ImgBig src={devops}></ImgBig>
                <Htext>
                    <InText>Let developers focus on code</InText>
                    <SMAText>Developers want to focus on code, not update issues. We get it! Open DevOps makes it easier to do both regardless of the tools you use. Now developers can stay focused and the business can stay aligned.</SMAText>
                    <ButLand color='white' title='Explore Open DevOps'/>
                    <br/>
                    <InTe style={{marginBottom: '15px'}}>Let developers focus on code</InTe>
                    <ImgQuo src={flo} height={'60px'}/>
                    <InText style={{marginTop: '20px'}}>900%</InText>
                    <InText style={{fontSize:'18px', marginTop: '-20px'}}>increase in deployments</InText>
                    <InText style={{marginTop: '20px'}}>50%</InText>
                    <InText style={{fontSize:'18px', marginTop: '-20px'}}>decrease in cycle time</InText>
                    
                </Htext>
            </Main>
        </Container4>
        <Container5>
            <SideP>
                <Numb src={Numb1}/>
                <BigText>
                Why Jira is the #1 tool recommended by agile teams.*
                </BigText>
                <SmTexs style={{width: '80%', fontWeight: '200', margin: '20px 0px'}}>
                Trusted by more than 100,000 organizations, Jira Software comes out-of-the-box with the features and best practices agile teams need to develop and evolve their agile practices.                </SmTexs>
                <SmTexs> *2021 State of Agile Report</SmTexs>

            </SideP>
            <SideB>
                <ImgQuo src={wuru1}/>
            </SideB>
        </Container5>
        <ImgQuo src={wuru2}/>
        <Container5 style={{minHeight:'300px'}}>
            <Main>
                <br/>
                <BigText> Get started with Jira Software</BigText>
                <br/>
                <ButLand bg='rgb(44,83,204)' color='white' title='Get it free' />
                <LinkText style={{color: 'rgb(44,83,204)', fontSize: '16px', textDecoration: 'underline'}}>See Features </LinkText>
            </Main>
        </Container5>
        <ImgQuo src={wuru3}/>
    </div>
  )
}

const Numb = styled.img`
margin-left: -100px;
`
const SideB = styled.div``
const SideP = styled.div`
height: 100%;
padding-top: 50px;
padding-left: 50px;
width: 45%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-evenly;

`
const Container5 = styled.div`
    min-height: 600px;
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;

`

const InTe = styled.div`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
`

const InText = styled.div`
font-weight: 700;
line-height: 1.1;
margin-bottom: 20px;
`
const SMAText = styled.div`
font-size: 16px;
font-weight: 600;
width: 90%;
text-align: justify;
margin: 20px 0px;
`

const ImgBig = styled.img`
height: 700px;
`
const Htext = styled.div`
font-size: 40px;
width: 35%;
margin-left: 50px;
`

const HoldText = styled.div`
width: 48%;
margin: 20px 0px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
text-align: center;
`
const GloImg = styled.img`
height: 300px;
`

const TDiv = styled.div`
    margin: 80px 0px;
    text-align: left;
    width: 60%;
    padding: 40px;
    border-radius: 0px 100px 100px 0px;
    background: rgb(210,248,249);
    background: linear-gradient(249deg, rgba(210,248,249,1) 0%, rgba(255,255,255,1) 90%);
`


const ImgS = styled.img`
    height: 50%;
`

const LinkText = styled.div`
font-size: 14px;
margin-top: 5px;
font-weight: 100;
`

const SmTexs = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const Holder = styled.div`
height: 100%;
width: 150px;
margin-right: 20px;
background-color: lightgray;
border-radius: 15px 0px 0px 15px;
display: flex;
justify-content: center;
align-items: center;
`

const SmTexts = styled.div`
font-size: 16px;
margin: 10px 0px;
text-align: center;
width: 70%;
`


const Card = styled.div`
height: 120px;
margin-top: 20px;
width: 400px;
border-radius: 15px;
display: flex;
/* justify-content: center; */
align-items: center;

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Con= styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: self-start;
`

const MidText = styled.div`
font-size: 20px;
font-weight: 600;
`
const Side = styled.div`
width: 48%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: gray; */
`
const BigText = styled.div`
font-size: 40px;
font-weight: 600;
`
const ImgQuo = styled.img``
const Name = styled.div`
font-size: 12px;
font-weight: 700;


`
const Posi = styled.div`
font-size: 12px;
font-weight: 200;
`
const Quo = styled.div`
margin: 20px 0px;
`
const SmText = styled.div`
margin: 20px 0px;
font-size: 18px;

`

const Content = styled.div`
display: flex;
margin: 40px 0px;
align-items: center;
`
const TexPart = styled.div`
width: 25%;
margin-right: 40px;
`
const Vids = styled.video`
height: 600px;
width: 900px;
object-fit: cover;
`

const Menus = styled.div`
display: flex;
margin-top: 10px;
`

const Menu = styled.div`
display: flex;
padding: 10px 25px;
background-color: #fdf9f9;
margin-right: 10px;
border-radius: 30px;
transition: all 500ms;
cursor: pointer;
color: gray;
:hover{
    transform: scale(1.07);
    background-color: white;
    border: 1px solid silver;
    color: black
}
`

const TiText= styled.div`
font-size: 40px;
font-weight: 700;
`

const Container = styled.div`
font-family: Oxygen;
color: #253858;
min-height: 140vh;
width: 100%;
display: flex;
justify-content: center;
align-items: end;
overflow: hidden;
background-color: #DEEBFF;
margin-top: -100px;
`
const Container2 = styled.div`
font-family: Oxygen;
color: #253858;
min-height: 200vh;
width: 100%;
display: flex;
justify-content: center;
align-items: end;
overflow: hidden;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
z-index: 10;
`

const Container3 = styled.div`
font-family: Oxygen;
color: #253858;
min-height: 50vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Container4 = styled.div`
font-family: Oxygen;
color: white;
min-height: 150vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: #172B4D;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


const Main = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


export default VideoPart
