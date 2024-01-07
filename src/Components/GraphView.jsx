import React from "react";
import styled from "@emotion/styled";
import {categoryDistribution, contentRatingDistribution, typeDistribution, maintainanceRecord, mostExpensiveAndMostDownloadedCategoryWise, ratingsAndSizeData } from "../data/graphData";
import DoughnutChart from "./ChartsAndGraphs/DoughnutChart";
import StackedBarChart from "./ChartsAndGraphs/StackedBarChart";
import { generateDate } from "./Table";
import ScatterChart from "./ChartsAndGraphs/ScatterChart";
import Barchart from "./ChartsAndGraphs/BarChart";
import SentimentAnalysis from "./ChartsAndGraphs/SentimentAnalysis";



const GraphView=()=>{

    return <Container>
        <DoughnutChart
        id="Chart-1"
        heading="No of apps in each category"
        label="No of apps"
        labels={categoryDistribution.labels}
        data={categoryDistribution.data}
        />
         <StackedBarChart
         id="Chart-2"
        heading="Category wise content rating"
        data={contentRatingDistribution}
        />
        <TypeContainer>
        <DoughnutChart
        id="Chart-3.1"
        heading="Type of App"
        label="No of apps"
        labels={["Free","Paid"]}
        data={[typeDistribution.totalFreeApps, typeDistribution.totalPaidApps]}
        />
        <DoughnutChart
        id="Chart-3.2"
        heading="Distribution of free apps"
        label="No of apps"
        labels={categoryDistribution.labels}
        data={typeDistribution.freeCategoryWise}
        />
        <DoughnutChart
        id="Chart-3.3"
        heading="Distribution of paid apps"
        label="No of apps"
        labels={categoryDistribution.labels}
        data={typeDistribution.paidCategoryWise}
        />
        </TypeContainer>
    <UpdatesInfoContainer>
        <p>Category wise most updated app on Play store</p>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Category</th>
                    <th>Most downloaded app/apps</th>
                    <th>Most maintained app/apps</th>
                    <th>Last updated on</th>
                </tr>
            </thead>
            <tbody>
                {maintainanceRecord.map(record=><tr key={record[0]}>
                    <td>{record[0]}</td>
                    <td>{record[1]}</td>
                    <td>{record[2]}</td>
                    <td>{record[3]}</td>
                    <td>{generateDate(record[4])}</td>
                </tr>)}
            </tbody>
        </table>
    </UpdatesInfoContainer>
    <ScatterChart
    id="Chart-4"
    data={mostExpensiveAndMostDownloadedCategoryWise}
    heading="Category wise price of most expensive app"
    label="Price ($)"                    
    />

<DoughnutChart
        id="Chart-5"
        heading="Category wise total downloads"
        label="No of downloads"
        labels={mostExpensiveAndMostDownloadedCategoryWise.labels}
        data={mostExpensiveAndMostDownloadedCategoryWise.mostDownloaded}
        />

<Barchart
        id="Chart-6"
        heading="Category wise Avg app size"
        label="Average size (in MB)"
        labels={ratingsAndSizeData.labels}
        data={ratingsAndSizeData.avgAppsize}
        bgColor='rgba(75, 192, 192, 0.7)'
        borderColor='rgba(75, 192, 192, 1.0)'
        />

<Barchart
        id="Chart-7"
        heading="Category wise Avg rating"
        label="Average rating"
        labels={ratingsAndSizeData.labels}
        data={ratingsAndSizeData.avgRatings}
        bgColor="rgba(rgba(54, 162, 235, 0.7))"
        borderColor="rgba(215, 112, 124, 1.0)"
        />

<SentimentAnalysis/>   
    </Container>
}

export default GraphView

const Container=styled.div`
display: flex;
@media (max-width:1240px){
    flex-direction: column;
}
height:100vh;
width: 100vw;
    
`

const TypeContainer=styled.div`
    
`

const UpdatesInfoContainer=styled.div`

p{
        font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
    }
    
      table {
    text-align: left;
    width: 100%;
  }

  tr,
  td,
  th {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tbody {
    display: block;
    height: 500px;
    overflow: auto;
    overflow-x: hidden;
  }

  thead {
    width: calc(100% - 1em) !important;

    @media (max-width: 1024px) {
      //width: 100% !important;
    }
    background-color: black;
    color: white;
  }

  th {
    border-color: white !important;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  td,
  th {
    word-break: break-word;
    padding: 5px;
    box-sizing: border-box;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #e2e2e2;
  }
  tbody tr:nth-of-type(even) {
    background-color: #9da29d;
  }
`