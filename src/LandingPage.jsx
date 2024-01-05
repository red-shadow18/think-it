import React from "react";
import TopBar from "./Components/TopBar";
import Table from "./Components/Table";
import appData from "./data/appData";

const LandingPage=()=>{
    return(
        <div>
            <TopBar/>
            <Table data={appData}/>
        </div>
    )
}

export default LandingPage