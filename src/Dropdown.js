// import React from "react";
import styled from "styled-components";



export const Dropdown = ({ id, title, style, options }) => {
  let Select;
  if (style && style.width) {
    Select = styled.select`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 2px 6px 0 rgba(31,38,135,0.37);
    color: gray;
    font-size: 1.2rem;
    border: none;
    background: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    // option styling
    margin:0px;
    margin-bottom:20px;
    
    // custom styling of chevron
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff;
    -webkit-appearance: none;
    background-position-x: calc(100% - 20px);
    width: ${style.width}%;
    option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    margin-bottom: 0;
      height: ${style.height}vh;
  }
`;
  }
  console.log('style height: ', style, style.height)
  return (
    <>
      { style && Select ? <Select>
        <option value="" hidden>
          {title}
        </option>
        {options.map((option, i) => (
          <option>{option}</option>
        ))}
      </Select>: undefined}
      </>
  );
};