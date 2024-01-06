import React from "react";
import styled from "@emotion/styled";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/theme";

const ContactMe = () => {
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  return (
    <Container isCurrentThemeDark={isCurrentThemeDark}>
      <p>I hope you have liked my project!! <FavoriteOutlinedIcon className="heart"/></p>
      <div className="contactInfo">
      <span>You can reach me at:</span> <span><EmailIcon /> : reachayushmishra@gmail.com ||</span>  
        <span><LocalPhoneIcon /> : +91-8529458915</span>
      </div>
    </Container>
  );
};

export default ContactMe;

const Container = styled.div`
margin-top:50px;
width: 100%;
    position: sticky;
    left: 0;
    bottom: 0;
  color: ${(props) =>
    props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
  background-color: ${(props) =>
    props.isCurrentThemeDark ? lightTheme.background : darkTheme.background};

    p{
      margin-bottom: 0.25rem;
      display: flex;
      justify-content: center;
    }
  .contactInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: flex;
    align-items: stretch;
    }
    @media (max-width:1024px){
      flex-direction: column;
    }
  }

  .heart{
    margin-left: 5px;
    fill: red;
    animation:pump 1s infinite
  }

  @keyframes pump{
    from{scale:1}
    to{scale:1.2}
  }
`;
