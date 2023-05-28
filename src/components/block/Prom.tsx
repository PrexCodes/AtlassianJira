import React from "react";
import styled from "styled-components";


import hero2 from "../../assets/Team23_Official_white_Large (1).svg";
import {BsArrowUpRight} from 'react-icons/bs'

export const Prom = () => {
  return (
    <div>
      <Container>
        <Main>
          <SideImage src={hero2} />
          <BigText>
          Catch up on what you missed at Team '23! Power up your Jira Software skills with our on-demand sessions.
          </BigText>
          <SmallText>
            {" "}
            Watch now
            <Icon1/>
          </SmallText>
        </Main>
      </Container>
    </div>
  );
};

const Icon1 = styled(BsArrowUpRight)`
font-size: 12px;
margin: 0 4px;
transition: all 500ms;
:hover{
    transform: translate(0, -2px);
}
`

const SideImage = styled.img`
  height: 40px;
`;
const BigText = styled.div`
  font-size: 16px;
  width: 40%;
  font-family: Oxygen;
  margin: 0px 40px;
`;
const SmallText = styled.div`
display: flex;
align-items: center;
justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #F3BCEB  
  
`;
const Container = styled.div`
    margin-top: -50px;
    
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
 
  
  overflow: hidden;
`;
const Main = styled.div`
    z-index: 5;
  top: 0px;
  background: rgb(63,49,146);
background: linear-gradient(249deg, rgba(63,49,146,1) 0%, rgba(11,30,69,1) 100%);
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
