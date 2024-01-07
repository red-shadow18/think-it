import React from "react";
import {
    Chart as ChartJS,
    registerables 
  } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import Container from "./Styles";

ChartJS.register(
    ...registerables 
  )


const StackedBarChart=({id,heading,data})=>{

    const chartOptions={
        scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
    }
    const chartData={
        labels:data.labels,
        datasets:data.dataSets,        
    }

    return <Container>
        <p>{heading}</p>
        <Bar id={id} data={chartData} options={chartOptions} />
    </Container>
}

export default StackedBarChart
