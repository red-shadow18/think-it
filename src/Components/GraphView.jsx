import React from "react";
import styled from "@emotion/styled";
import { distinctCategories, sentimentData, categoryDistribution } from "../data/graphData";
import DoughnutChart from "./ChartsAndGraphs/DoughnutChart";



console.log('DistinctCategories: ',distinctCategories)
console.log("SentimentData: ",sentimentData)



const GraphView=()=>{

    return <Container>
        <DoughnutChart
        heading="No of apps in each category"
        label="No of apps"
        labels={categoryDistribution.labels}
        data={categoryDistribution.data}
        />
    </Container>
}

export default GraphView

const Container=styled.div`
    
`