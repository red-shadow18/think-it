import React,{useState} from "react";
import styled from "@emotion/styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { backgroundColors, borderColors } from "../../data/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart=({heading,label,labels,data})=>{
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
        radius:200,
        // legend:{
        //     labels:{
        //         color:'red'
        //     }

        // }
    }
    return <Container>
        <p>{heading}</p>
        <Doughnut data={chartData} options={chartOptions}/>;
    </Container>
}

export default DoughnutChart

const Container=styled.div`
    /* width: 700px;
    height: 700px; */
`