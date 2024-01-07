import React from "react";
import styled from "@emotion/styled";
import {
    Chart as ChartJS,
    registerables 
  } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { contentRatingDistribution } from "../../data/graphData";

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
        labels:contentRatingDistribution.labels,
        datasets:contentRatingDistribution.dataSets,        
    }

    console.log(chartData)
    return <Container>
        <p>{heading}</p>
        <Bar id={id} data={chartData} options={chartOptions} />
    </Container>
}

export default StackedBarChart

const Container= styled.div`
        p{
        font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
    }
`