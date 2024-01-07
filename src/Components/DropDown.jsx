import React,{useState} from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";



const Dropdown=({options,label,handleChange,value,defaultValue})=>{
    const isCurrentThemeDark = useSelector((state) => state.darkTheme);
    return <Container isCurrentThemeDark={isCurrentThemeDark}>
          <label htmlFor="dropdown" className="label">
            {label + ": "}
          </label>
          <select
            id="dropdown"
            className="inputField"
            value={value}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.label}
              </option>
            ))}
          </select>
    </Container>
}

export default Dropdown

const Container=styled.div`
    
    .label {
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
  }

  .inputField {
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    height: 30px;
    border-color: ${(props) =>
      props.isCurrentThemeDark
        ? lightTheme.secondary
        : darkTheme.secondary};
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};

    ::placeholder {
      color: ${(props) =>
        props.isCurrentThemeDark
          ? lightTheme.secondary
          : darkTheme.secondary};
    }
  }

`