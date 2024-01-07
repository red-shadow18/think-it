import React from "react";
import styled from "@emotion/styled";
import { distinctCategories, sentimentData, categoryDistribution, contentRatingDistribution } from "../data/graphData";
import DoughnutChart from "./ChartsAndGraphs/DoughnutChart";
import StackedBarChart from "./ChartsAndGraphs/StackedBarChart";



console.log('DistinctCategories: ',distinctCategories)
console.log("SentimentData: ",sentimentData)



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
        />
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