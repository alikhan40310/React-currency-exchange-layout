import React, { useState } from "react";
import styled from 'styled-components';
import Title from './Title';
import { Dropdown } from './Dropdown';
import { Input } from './Input';

export default function SecondPage() {
  const [userValue, setUserValue] = useState('');
  console.log(userValue);
  const baseCurrencies = ["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yz"];

  const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
  height: 80vh;
}
`;
  const Div = styled.div`
  // display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;  
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media (max-width:1199px) {
    width: 50vw;
  }
  @media (max-width:991px) {
    width: 70vw;
    padding: 1.2rem;
  }
}
`;
  const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 20px;
   
`;
const Button = styled.button`
  background: #1da1f2;
  color: white;
  position: absolute;
  bottom: 17%;
  border:2px solid #1da1f2;
  border-radius: 7px;
  padding: 20px 60px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px;
  transition: 0.3s all;
  :hover {
    opacity: 0.8;
    transition: 0.3s all;
  }
  :focus {
    outline: none;
  }
  @media (max-width:479px) {
  bottom: 3%;
   
  } 
  @media (max-width:768px) {
    width: 50%;
    padding: 12px 0px;
    margin:0;
  }
`;
const TextContainer = styled.div`
  color:black;
  margin-left:3vw;
  margin-top:80px;
`;
const Paragraph = styled.p`
  text-transform: capitalize;
  font-size: 1.2rem;
`;
const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
const MainHeader = styled.div`
  background:#00be28;
  height: 10vh;

  @media (max-width:1300px) {
    height: 12vh;
  }
  @media (max-width:479px) {
    height: auto;
  } 
`;
const HeaderTitle = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
  color: white;
`;
const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width:479px) {
    flex-direction: column;
  }
`;
const Arrow = styled.button`
  font-size: 2rem;
  background: #00be28;
  border:1px solid #00be28;
  color:#fff;
  margin-right:10px;
  font-weight:bold;
  cursor:pointer;
`;
const DropdownContainer = styled.div`
  width: 12%;
  @media (max-width:1199px) {
    width: 12%;
    
  } 
  @media (max-width:991px) {
    width: 25%;
  }  
  @media (max-width:479px) {
    margin-left:12%;
    width: 40%;
    margin-top:20px;
  }  
`;
  return (
    <div>
      <MainHeader>
      <InnerHeader>
        <HeaderTitle>
       <Arrow> 🠔 </Arrow>currency Converter
        </HeaderTitle>
        <DropdownContainer>
          <Dropdown id="baseId" title="From"  options={baseCurrencies} />
        </DropdownContainer>
      </InnerHeader>
    </MainHeader>
    



    <MainDiv>
      <Div>
        <Title>Exchange Rates</Title>
        <TextContainer>
          <Paragraph>To $ 10.000</Paragraph>
          <Heading2>$1.224</Heading2>
          <Paragraph>To $ 10.000</Paragraph>
          <Heading2>$1.224</Heading2>
        </TextContainer>

  
        <ButtonContainer>
          <Button>Back</Button>
        </ButtonContainer>
      </Div>
    </MainDiv>
    </div>
  )
}