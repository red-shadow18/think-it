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
          
          if(currentSentiment.id===1){
            let newSentimentsData={...sentimentsFinalData}
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===2){
            let newSentimentsData={
              labels:[sentimentsFinalData.labels[0]],
              dataSets:[]
            }
            let newDataSets=[]
            sentimentsFinalData.dataSets.forEach((entry,index)=>{
              let obj={
                label:entry.label,
                backgroundColor:entry.backgroundColor,
                data:[entry.data[0]]
              }
              newDataSets.push(obj)
            })
            newSentimentsData.dataSets=newDataSets
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===3){
            let newSentimentsData={
              labels:[sentimentsFinalData.labels[1]],
              dataSets:[]
            }
            let newDataSets=[]
            sentimentsFinalData.dataSets.forEach((entry,index)=>{
              let obj={
                label:entry.label,
                backgroundColor:entry.backgroundColor,
                data:[entry.data[1]]
              }
              newDataSets.push(obj)
            })
            newSentimentsData.dataSets=newDataSets
            setSentimentsModifiedData(newSentimentsData)
          }else if(currentSentiment.id===4){
            let newSentimentsData={
              labels:[sentimentsFinalData.labels[2]],
              dataSets:[]
            }
            let newDataSets=[]
            sentimentsFinalData.dataSets.forEach((entry,index)=>{
              let obj={
                label:entry.label,
                backgroundColor:entry.backgroundColor,
                data:[entry.data[2]]
              }
              newDataSets.push(obj)
            })
            newSentimentsData.dataSets=newDataSets
            setSentimentsModifiedData(newSentimentsData)
          }
        }
        return <StackedBarChart
          id="Chart-8"
         heading="Sentiment analysis (based on reviews)"
         data={sentimentsModifiedData}
         allowFilters={true}
         filterOptions={sentimentFilters}
         handleFilterChange={handleSentimentChange}
         filterLabel="Sentiment type"
         filterValue={sentimentValue.id}
         width="100%"
         />
    }


export default SentimentAnalysis