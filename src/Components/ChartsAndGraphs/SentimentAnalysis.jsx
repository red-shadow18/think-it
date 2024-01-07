import React,{useState} from "react";
import { sentimentsFinalData } from "../../data/graphData";
import StackedBarChart from "./StackedBarChart";
import { sentimentFilters } from "../../data/constants";


const SentimentAnalysis=()=>{
    const [sentimentValue, setSentimentValue]=useState({id:1,label:"All"})
    const [sentimentsModifiedData, setSentimentsModifiedData]=useState(sentimentsFinalData)

    const handleSentimentChange=(e)=>{
        const currentSentiment = sentimentFilters.find(
            (sentiment) => sentiment.id === parseInt(e.target.value)
          );
          setSentimentValue(currentSentiment);
          let newSentimentsData={...sentimentsFinalData}
          if(currentSentiment.id===1){
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===2){
            
            newSentimentsData.dataSets.forEach((entry,index)=>{
                let newData=sentimentsFinalData.dataSets[index].data[0]
                entry.data=[newData]})
            newSentimentsData.labels=[newSentimentsData.labels[0]]
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===3){
            newSentimentsData.dataSets.forEach((entry,index)=>{
                let newData=sentimentsFinalData.dataSets[index].data[1]
                entry.data=[newData]})
            newSentimentsData.labels=[newSentimentsData.labels[1]]
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===4){
            newSentimentsData.dataSets.forEach((entry,index)=>{
                let newData=sentimentsFinalData.dataSets[index].data[2]
                entry.data=[newData]})
            newSentimentsData.labels=[newSentimentsData.labels[2]]
            setSentimentsModifiedData(newSentimentsData)
          }
        }
        return <StackedBarChart
          id="Chart-8"
         heading="Sentiment analysis"
         data={sentimentsModifiedData}
         allowFilters={true}
         filterOptions={sentimentFilters}
         handleFilterChange={handleSentimentChange}
         filterLabel="Sentiment type"
         filterValue={sentimentValue.id}
         />
    }


export default SentimentAnalysis