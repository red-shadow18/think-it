import React from "react";
import { Bar } from 'react-chartjs-2';
import Container from "./Styles";

const Barchart=({heading,data,labels,label, bgColor, borderColor})=>{
    const chartData={
        labels:labels,
        datasets:[
            {
                data:data,
                label:label,
                backgroundColor: bgColor,
                borderColor:borderColor ,
                borderWidth: 1,
            }
        ]
    }
    const chartOptions={
        scales: {
            x: {
              type: 'category',
              position: 'bottom',
            },
            y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
            },
          }
    }


    return <Container>
        <p>{heading}</p>
        <Bar data={chartData} options={chartOptions} />
    </Container>
}

export default Barchart

