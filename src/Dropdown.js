// import React from "react";
import styled from "styled-components";

const Select = styled.select`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 2px 6px 0 rgba(31,38,135,0.37);
   
    color: gray;
    padding-left: 5px;
    font-size: 20px;
    border: none;
    margin-left: 10px;
    background: #fff;
    border-radius: 0.5rem;
    padding: 10px 20px;
    height: 7vh;
    option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Dropdown = ({ id, title, style, options }) => {
  return (
    <div className="">
      <Select style={style}>
        <option value="" hidden>
          {title}
        </option>
        {options.map((option, i) => (
          <option>{option}</option>
        ))}
      </Select>
    </div>
  );
};