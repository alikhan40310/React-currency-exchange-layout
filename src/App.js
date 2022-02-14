import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Title from './Title';
import {Dropdown} from './Dropdown';
import Input from './Input';
import React, { useState } from 'react';
import logoo from './index.png';

function App() {
  const [userValue, setUserValue] = useState('');
  console.log(userValue)
  let Input;
  let width = '22.3vw';
  let height = '3vh';
  Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 6px 0 rgba(31,38,135,0.37);
  border-radius: 0.5rem;
  height: ${height};
  padding: 1rem 1.6rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #00be28;
    backdrop-filter: blur(12rem);
    border-radius: 0.5rem;
  }
  &::placeholder {
    color: #000;
    font-weight: 500;
    font-size: 1rem;
  }
    width:80%;
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
  @media (max-width:1199px) {
    padding:5%;
  }
}
`;
const Div = styled.div`
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
  // responsive design using media queries
  @media (max-width:1300px) {
    width: 50vw;
  } 
  @media (max-width:1199px) {
    width: 60vw;
  } 
  @media (max-width:991px) {
    width: 70vw;
    padding: 1rem;
    height: 85vh;

  }  
  @media (max-width:768px) {
    width: 100vw;
  }  
  @media (max-width:479px) {
    height: 90vh;
  }  
}
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
const ContentContainer = styled.div`
  text-align: center;
`;
const ItemCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 20px;
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
const baseCurrencies = ["abcd","efgh","ijkl","mnop","qrst","uvwx","yz"];
  return (
  <div>
    <MainHeader>
      <InnerHeader>
        <HeaderTitle>
       <Arrow> 🠔 </Arrow>currency Converter
        </HeaderTitle>
        <DropdownContainer>
          <Dropdown id="baseId" title="From" style={{width: "100", height:"6"}} options={baseCurrencies} />
        </DropdownContainer>
      </InnerHeader>
    </MainHeader>

        


    <MainDiv>
      <Div>
        <Title>Currency Converter</Title>
        <ItemCenter>
          <Image src={logoo} style={{ width: 300, height: 300 }} alt="logo" />
        </ItemCenter>
          <ContentContainer>
            <Input id="inputId" type="text" placeholder="Currency Value" value={userValue} handleOnChange={(value) => console.log({value})} />
            <Dropdown id="baseId"  title="From" style={{width: "89", height: '6'}} options={baseCurrencies} />
          </ContentContainer>
        <ButtonContainer>
          <Button>Transfer</Button>
        </ButtonContainer>
      </Div> 
    </MainDiv>
  </div>
  );
}

export default App;
