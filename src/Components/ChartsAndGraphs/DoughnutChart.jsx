import React,{useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { backgroundColors, borderColors } from "../../data/constants";
import Container from "./Styles";


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart=({id,heading,label,labels,data,width,showFilter=false})=>{

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
        }},layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            }
          },
    }
    return <Container width={width}>
        <p>{heading}</p>
        <Doughnut id={id} data={chartData} options={chartOptions}/>
    </Container>
}

export default DoughnutChart
