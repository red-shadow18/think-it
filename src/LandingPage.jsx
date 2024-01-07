import React from "react";
import TopBar from "./Components/TopBar";
import Table from "./Components/Table";
import styled from "@emotion/styled";
import { lightTheme, darkTheme } from "./utils/theme";
import { useSelector } from "react-redux";
import GraphView from "./Components/GraphView";
import ContactMe from "./Components/ContactMe";


// const views = {
//   true: <Table />,
//   false: <GraphView />,
// };

const renderView = (isCurrentModeExpert) => {
  if (isCurrentModeExpert) {
    return <Table />
  } else {
    return <GraphView />
  }
};

const LandingPage = () => {
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  const isCurrentModeExpert = useSelector((state) => state.expertMode);

  return (
    <Container isCurrentThemeDark={isCurrentThemeDark}>
      <TopBar />
      {/* {views[isCurrentModeExpert]} */}
      {renderView(isCurrentModeExpert)}
      {/* {isCurrentModeExpert?<Table data={appData}/>:<GraphView/>} */}
      <ContactMe />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
height:100%;
width: 100%;
  background-color: ${(props) =>
    props.isCurrentThemeDark ? lightTheme.background : darkTheme.background};
  padding: 10px;
`;
