import React,{useState} from "react";
import styled from "@emotion/styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { backgroundColors, borderColors } from "../../data/constants";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart=({id,heading,label,labels,data})=>{
    const isCurrentThemeDark = useSelector((state) => state.darkTheme);
    const [options,setOptions]=useState([])
    const handleFilterChange=()=>{

    }

    const chartData={
        labels:labels,
        datasets:[
            {
                label:label,
                data:data,
                borderWidth:1,
                hoverOffset: 4,
                backgroundColor:backgroundColors,
                borderColor:borderColors
            }
        ],
    }

    const chartOptions={
        radius:100,
        responsive:true,
        maintainAspectRatio:true,
        plugins:{legend:{
            display:true,
            position:'bottom',
            labels:{
                color:isCurrentThemeDark ? lightTheme.text : darkTheme.text,
            }

        }}
    }
    return <Container>
        <p>{heading}</p>
        <Doughnut id={id} data={chartData} options={chartOptions}/>
    </Container>
}

export default DoughnutChart

const Container=styled.div`
    /* width: 700px;
    height: 700px; */

    p{
        font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
    }
`