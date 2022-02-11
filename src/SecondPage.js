import React, { useState } from "react";
import styled from 'styled-components';
import Title from './Title';
import { Dropdown } from './Dropdown';
import { Input } from './Input';

export default function SecondPage() {
  const [userValue, setUserValue] = useState('');
  console.log(userValue);
  const baseCurrencies = ["abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yz"];

  const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 6px 0 rgba(31,38,135,0.37);
  border-radius: 0.5rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 500;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 1.2rem;
  }
  &::placeholder {
    color: #000;
    font-weight: 100;
    font-size: 1rem;
  }
`;

  const Button = styled.button`
  background: #1da1f2;
  color: white;
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
`;

  const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
}
`;

  const Div = styled.div`
  // display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;  
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
}
`;

  const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
  const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  
  margin-top: 20px;
`;

  const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 20px;
`;
const TextContainer = styled.div`
  color:black;
  margin-left:2vw;
  margin-bottom:10px;
`;
const Paragraph = styled.p`

`;
const Heading2 = styled.h2`

`;
  return (
    <MainDiv>
      <Div>
        <Title>Exchange Rates</Title>
        <TextContainer>
          <Paragraph>To $ 10.000</Paragraph>
          <Heading2>$1.224</Heading2>
        </TextContainer>
        <TextContainer>
          <Paragraph>To $ 10.000</Paragraph>
          <Heading2>$1.224</Heading2>
        </TextContainer>
        <TextContainer>
          <Paragraph>To $ 10.000</Paragraph>
          <Heading2>$1.224</Heading2>
        </TextContainer>
        <InputContainer>
          <Input id="inputId" type="text" placeholder="Currency Value" value={userValue} handleOnChange={(value) => console.log({ value })} />
        </InputContainer>
        <DropDownContainer>
          <Dropdown id="baseId" title="From" style={{ width: "25vw" }} options={baseCurrencies} />
        </DropDownContainer>
        <ButtonContainer>
          <Button>Back</Button>
        </ButtonContainer>
      </Div>
    </MainDiv>
  )
}