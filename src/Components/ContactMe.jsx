import React from "react";
import styled from "@emotion/styled";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const ContactMe = () => {
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  return (
    <Container isCurrentThemeDark={isCurrentThemeDark}>
      <p>I hope you have liked my project!!</p>
      <p className="contactInfo">
        You can reach me at: <EmailIcon /> : reachayushmishra@gmail.com ||{" "}
        <LocalPhoneIcon /> : +91-8529458915{" "}
      </p>
    </Container>
  );
};

export default ContactMe;

const Container = styled.div`
  color: ${(props) =>
    props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
  background-color: ${(props) =>
    props.isCurrentThemeDark ? lightTheme.background : darkTheme.background};
  .contactInfo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
