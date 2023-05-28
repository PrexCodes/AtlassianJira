import React, { useState } from 'react'
import styled from 'styled-components'
import atlogo from '../../assets/Atlassian-horizontal-blue-rgb (2).svg'
import atlogo2 from '../../assets/Jira Software_24.svg'
import {BsChevronDown} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {RxAvatar} from 'react-icons/rx'
import ButLand from '../static/ButLand'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {

  const [toggle, setToggle] = useState<boolean>(true);

  const onTog = ()=>{
    setToggle(!toggle)
  }

  return (
    <div>
      <Container>
        <Main>
            <Diva>
                <ImageLogo hh='30px' src={atlogo}/>
                <NavBar>
                <Nav> Products</Nav><IconDown></IconDown>
                </NavBar>
                <NavBar>
                <Nav> For Teams</Nav><IconDown></IconDown>
                </NavBar>
                <NavBar>
                <Nav> Support</Nav><IconDown></IconDown>
                </NavBar>
            </Diva>
            <Diva>
              <BText>Buy now</BText>
              <Sicon/>
              <HLine></HLine>
              <Acct>
                <ImgIcon/>
                <BTex>My account</BTex>
                <IconDown/>
              </Acct>
            </Diva>
        </Main>
      </Container>
      <Container1>
        <Main>
            <Diva>
                <ImageLogo hh='25px' src={atlogo2}/>
                <Nav2>Features</Nav2>
                <Nav2>Product guide</Nav2>
                <Nav2>Templates</Nav2>
                <Nav2>Pricing</Nav2>
                <Nav2>Enterprise</Nav2>
            </Diva>
            <Diva>
              <ButLand bg='transparent' color='rgb(44,83,204)' title='Get it free' />
              
            </Diva>
        </Main>
      </Container1>
      {toggle ? (<Container2>
        
        <Nav>Catch the ultimate event for modern teamwork from the comfort of your own desk. Team ‘23 sessions now available on demand. <Nav3>Watch now →</Nav3></Nav>
        <IconX onClick={onTog}/>
      
    </Container2>) : null}
    </div>
  )
}

const IconX = styled(AiOutlineClose)`
margin-top: 6px;
margin-left: 15px;
color: gray;
cursor: pointer;
:hover{
  transform: scale(1.10);
}

`
const ImgIcon = styled(RxAvatar)`
font-size: 20px;
margin-right: 8px;
background-color: white;
padding: 2px;
border-radius: 50%;
margin-top: 4px;
`
const BText = styled.div`
padding: 4px 15px;
transition: all 500ms;
border-radius: 5px;
cursor: pointer;
:hover{
  background-color: lightgray;
}
`
const BTex = styled.div`
font-size: 14px;
font-weight: 500;
margin-top: 2px;
`
const Sicon = styled(BiSearch)`
margin-right: 20px;
margin-top: 2px;  
font-size: 22px;
color: gray;
padding: 4px 3px;
transition: all 500ms;
border-radius: 50%;
cursor: pointer;
:hover{
  background-color: lightgray;
}
`
const HLine = styled.div`
height: 40px;
width: 2px;
background-color: gray;
margin-right: 20px;
`
const Acct = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4px 6px;
transition: all 500ms;
border-radius: 5px;
cursor: pointer;
:hover{
  background-color: lightgray;
}
`

const Diva = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const NavBar = styled.div`
display: flex;
margin-right: 4px;
align-items: center;
padding: 8px 12px;
transition: all 500ms;
border-radius: 5px;
cursor: pointer;
:hover{
  background-color: lightgray;
}
`
const Nav3 = styled.div`
color: rgb(36, 59, 82);
font-weight: 600;
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
display: flex;
align-items: center;
`
const Nav = styled.div`
color: rgb(17, 28, 39);
font-weight: 400;
display: flex;
align-items: center;
`
const Nav2 = styled.div`
font-weight: 500;
margin:15px;
position: relative;
cursor: pointer;
::after{
  content: "";
  height: 2px;
  width: 100%;
  background-color: lightgray;
  bottom: -12px;
  left: 0px;
  transform: scale(0);
  transition: all 500ms;
  position: absolute;
  
}

:hover{
  ::after{
    transform: scale(1)
  }
}


`
const IconDown = styled(BsChevronDown)`
font-size: 10px;
margin-top: 5px;
margin-left: 5px;
`
const ImageLogo = styled.img<{hh:string}>`
height: ${({hh})=>hh};
margin-right: 20px;
`
const Main = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
height: 80px;
color: rgb(66,108,211);
width: 100%;
background-color: rgb(244,245,247);
display: flex;
justify-content: center;
align-items: center;

`
const Container1 = styled.div`
height: 60px;
z-index: 7;
color: rgb(66,108,211);
width: 100%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 5px 7px;

display: flex;
justify-content: center;
align-items: center;

`
const Container2 = styled.div`
height: 50px;
font-size: 16px;
width: 100%;
background-color: #DEEBFF;
z-index: 0;

display: flex;
justify-content: center;
align-items: center;
/* position: fixed; */

`


export default Header
