import React from "react";
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { switchTheme } from '../redux/action'
import { useSelector } from 'react-redux'
import Toggle from "./Toogle";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { excelConvertor } from "../utils/excelToArray";
import appData from "../data/appData";
import finalReviews from "../data/appReviews";

console.log(appData)
console.log(finalReviews)
const TopBar=()=>{
    const dispatch = useDispatch()
    const isCurrentThemeDark=useSelector((state)=>state.darkTheme)
    const handleSwitchTheme=()=>{
        dispatch(switchTheme())
    }
     const handleFileChange= async (e)=>{
        const file = e.target.files[0];

        try {
            await excelConvertor(file)
        }catch(error){
            console.error("some error occured")
        }
     }



    return(
        <Container>
            <div className="info">
                <h2 className>Think-it: </h2>
                <p className>making decision making easier</p>
            </div>
            <div className="buttonsContainer">
            <Toggle
            onClick={handleSwitchTheme}
            currentState={isCurrentThemeDark}
            trueStateIcon={<DarkModeIcon/>}
            falseStateIcon={<LightModeIcon/>}
            trueStateToolTip="Swtich to light mode"
            falseStateToolTip="Swtich to dark mode"
            />

            <input type="file" onChange={handleFileChange} />
            </div>     
        </Container>
    )

}

export default TopBar

const Container=styled.div`
    display: flex;
    .info {
        display: flex;
        align-items: flex-end;
        padding:10px;

        h2 {
            margin:0;
            text-decoration: underline;
        }
        
        p {
            margin: 0;
        }

    }
    
`