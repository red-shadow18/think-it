import React from "react";
import styled from "@emotion/styled";
import appData from "../data/appData";


// const getDistinctEntries = (array, key) => {
//     const seen = new Set();
//     return array.filter((item) => {
//       const value = item[key];
//       if (!seen.has(value)) {
//         seen.add(value);
//         return true;
//       }
//       return false;
//     });
//   };
// console.log(getDistinctEntries(appData,"App"))
// //find distincts app categories
// //tratVarieswithdev as 0
// let distinctCategories=[]
// appData.forEach(entry=>{
//   entry["Genres"].forEach(category=>{
//     if(!(distinctCategories.findIndex(entry=>entry.category===category)>-1)){
//       distinctCategories.push({category:category,id:crypto.randomUUID(),appNames:[],totalCategoryDownloads:0,mostdownloaded:[{name:"",noOfDownloads:0}],averageSize:0,mostUpdated:[{name:"", lastupdatedOn:0}],averageRating:0,bestRated:[{name:"",rating:0}],numberOfPaidApps:0,numberOfFreeApps:0, mostExpensiveApp:[{name:'',price:0}],numberOfAppsForEveryone:0,numberOfAppsForEveryone10Plus:0,numberOfAppsForTeen:0,numberOfAppsForMature:0,numberOfAppsForUnrated:0})
//     }
//   })
// })

// let transformedAppData=[]

// // sentiment=>{
// //     id:,
// //     category:
// //     totalRev:,
// //     totalPos,
// //     neg,
// //     nan:
// // }
// console.log(distinctCategories)
// appData.forEach(entry=>{
//     let obj={}
//     entry["Genres"].forEach(category=>{
//         let index=distinctCategories.findIndex((cat)=>cat.category===category)
//         let transFormedObj=distinctCategories[index]
//         let newAppNames=[entry["App"],...transFormedObj.appNames]
//         let newTotalCategoryDownloads=transFormedObj.totalCategoryDownloads+parseInt(entry["Installs"].replaceAll(',',''))
//         let newMostDownloaded=transFormedObj.mostdownloaded
//         if(parseInt(entry["Installs"].replaceAll(',',''))>newMostDownloaded[0].noOfDownloads){
//             newMostDownloaded=[{name:entry["App"], noOfDownloads:parseInt(entry["Installs"].replaceAll(',',''))}]
//         }else if(parseInt(entry["Installs"].replaceAll(',',''))===newMostDownloaded[0].noOfDownloads){
//             newMostDownloaded.push({name:entry["App"], noOfDownloads:parseInt(entry["Installs"].replaceAll(',',''))})
//         }
        
        
        
//         transFormedObj={...transFormedObj,appNames:newAppNames,totalCategoryDownloads:newTotalCategoryDownloads,mostdownloaded:newMostDownloaded}
    
//         distinctCategories.splice(index,1,transFormedObj)
     
//       })

// })

// console.log(distinctCategories)

const GraphView=()=>{
    return <Container>

    </Container>
}

export default GraphView

const Container=styled.div`
    
`