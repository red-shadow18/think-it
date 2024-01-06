import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const Toggle = ({
  trueStateIcon,
  falseStateIcon,
  onClick,
  currentState,
  trueStateToolTip,
  falseStateToolTip,
}) => {
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  return (
    <ToggleButton onClick={onClick} isCurrentThemeDark={isCurrentThemeDark}>
      <span>{currentState ? trueStateIcon : falseStateIcon}</span>
      <p>{currentState ? trueStateToolTip : falseStateToolTip}</p>
    </ToggleButton>
  );
};

export default Toggle;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  span {
  }

  p {
    display: none;
  }

  &&:hover > p {
    display: block !important;
    position: absolute;
    top: 20px;
    left: -2px;
    z-index: 2;
    padding: 5px;
    border-radius: 4px;
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
    background-color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.background : darkTheme.background};
  }
`;
