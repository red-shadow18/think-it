import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { switchAuthentication, switchMode, switchTheme } from "../redux/action";
import { useSelector } from "react-redux";
import Toggle from "./Toogle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import TableRowsIcon from "@mui/icons-material/TableRows";
import LogoutIcon from '@mui/icons-material/Logout';
//import { excelConvertor } from "../utils/excelToArray";
import { lightTheme, darkTheme } from "../utils/theme";

const TopBar = () => {
  const dispatch = useDispatch();
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  const isCurrentModeExpert = useSelector((state) => state.expertMode);
  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  const handleSwitchMode = () => {
    dispatch(switchMode());
  };

  const handleLogout=()=>{
    dispatch(switchAuthentication())
  }
  //  const handleFileChange= async (e)=>{
  //     const file = e.target.files[0];

  //     try {
  //         await excelConvertor(file)
  //     }catch(error){
  //         console.error("some error occured")
  //     }
  //  }

  return (
    <Container isCurrentThemeDark={isCurrentThemeDark}>
      <div className="info">
        <h2 className="projectName">Think-it: </h2>
        <p className="projectDescription">making decision making easier</p>
      </div>
      <div className="buttonsContainer">
        <Toggle
          id="change-mode"
          onClick={handleSwitchMode}
          currentState={isCurrentModeExpert}
          trueStateIcon={<TableRowsIcon />}
          falseStateIcon={<EqualizerIcon />}
          trueStateToolTip="Swtich to graph view"
          falseStateToolTip="Swtich to table view"
        />
        <Toggle
          id="change-theme"
          onClick={handleSwitchTheme}
          currentState={isCurrentThemeDark}
          trueStateIcon={<DarkModeIcon />}
          falseStateIcon={<LightModeIcon />}
          trueStateToolTip="Swtich to light mode"
          falseStateToolTip="Swtich to dark mode"
        />
        <Toggle
          id="log-me-out"
          onClick={handleLogout}
          currentState={true}
          trueStateIcon={<LogoutIcon />}
          falseStateIcon={<LogoutIcon />}
          trueStateToolTip="Logout"
          falseStateToolTip="Logout"
        />

        {/* <input type="file" onChange={handleFileChange} /> */}
      </div>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .projectName {
    overflow: hidden;
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.heading : darkTheme.heading};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.09em;
    animation: typing 2s steps(40, end);
  }

  @keyframes typing {
    from {
      width: 0%;
    }
    to {
      width: 100px;
    }
  }

  .projectDescription {
    overflow: hidden;
    animation: slow-appear 3s ease-in-out;
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
  }

  @keyframes slow-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .buttonsContainer {
    padding-right: 25px;
    display: flex;
    gap: 10px;
  }

  .info {
    display: flex;
    align-items: flex-end;
    padding: 10px;
    gap: 10px;

    h2 {
      margin: 0;
      text-decoration: underline;
    }

    p {
      margin: 0;
      padding-bottom: 1px;
    }
  }
`;
