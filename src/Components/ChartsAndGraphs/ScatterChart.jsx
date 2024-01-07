import React from "react";
import { Scatter } from 'react-chartjs-2';
import Container from "./Styles";


const ScatterChart=({heading,data,label,width})=>{
    const chartData={
        labels:data.labels,
        datasets:[
            {
                label:label,
                data:data.mostExpensive,
                pointRadius:4,
                pointHoverRadius:6
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
            },
          },
    }
return <Container width={width}>
<p>{heading}</p>
<Scatter data={chartData} options={chartOptions} />
</Container>
}

export default ScatterChart

