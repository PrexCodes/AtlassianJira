import React from "react";
import styled from "styled-components";
import img from "../../../assets/jirALOGO.png"
function Head() {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={img} />
          <Text>Cloud Free</Text>
        </Main>
      </Container>
    </div>
  );
}

export default Head;
const Text = styled.div`
  font-weight: 300px;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  
`;
const Main = styled.div`
margin-top: 120px;`;
const Logo = styled.img`
  
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
