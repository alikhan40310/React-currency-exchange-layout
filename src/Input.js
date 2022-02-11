import styled from 'styled-components';

const StyledInput = styled.input`
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

export const Input = ({ id, type, title, value, handleOnChange }) => {
    return (
        <Input id={id} type={type} placeholder={title} value={value} onChange={e => handleOnChange(e.target.value)} />
    )

}