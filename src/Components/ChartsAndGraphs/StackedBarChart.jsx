import React from "react";
import {
    Chart as ChartJS,
    registerables 
  } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import Container from "./Styles";
import Dropdown from "../DropDown";

ChartJS.register(
    ...registerables 
  )


const StackedBarChart=({id,heading,data,allowFilters=false, width, filterOptions, handleFilterChange, filterLabel, filterValue})=>{


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

    return <Container width={width}>
       <div className="dp-flx">
       <p>{heading}</p>
        {allowFilters && <Dropdown options={filterOptions} label={filterLabel} handleChange={handleFilterChange} value={filterValue}/>}
        </div> 
        <Bar id={id} data={chartData} options={chartOptions} />
    </Container>
}

export default StackedBarChart
