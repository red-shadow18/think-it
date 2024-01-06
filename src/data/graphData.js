import appData from "../data/appData";
import finalReviews from "../data/appReviews";

let distinctCategories=[]
appData.forEach(entry=>{
  entry["Category"].forEach(category=>{
    if(!(distinctCategories.findIndex(entry=>entry.category===category)>-1)){
      distinctCategories.push({category:category,id:crypto.randomUUID(),appNames:[],totalCategoryDownloads:0,mostDownloaded:[{name:"",noOfDownloads:0}],appsWithSizeAvl:0,averageSize:0,mostUpdated:[{name:"", lastupdatedOn:0}],averageRating:0,appsWithRatingAvl:0,bestRated:[{name:"",rating:0}],numberOfPaidApps:0,numberOfFreeApps:0, mostExpensiveApp:[{name:'',price:0}],numberOfAppsForEveryone:0,numberOfAppsForEveryone10Plus:0,numberOfAppsForTeen:0,numberOfAppsForMature:0,numberOfAppsForUnrated:0, numberOfAppsForAudultsOnly:0})
    }
  })
})

appData.forEach(entry=>{
    entry["Category"].forEach(category=>{
        let index=distinctCategories.findIndex((cat)=>cat.category===category)
        let transFormedObj=distinctCategories[index]
        let newAppNames=[entry["App"],...transFormedObj.appNames]
        let newTotalCategoryDownloads=transFormedObj.totalCategoryDownloads+parseInt(entry["Installs"].replaceAll(',',''))

        let newMostDownloaded=transFormedObj.mostDownloaded
        if(parseInt(entry["Installs"].replaceAll(',',''))>newMostDownloaded[0].noOfDownloads){
            newMostDownloaded=[{name:entry["App"], noOfDownloads:parseInt(entry["Installs"].replaceAll(',',''))}]
        }else if(parseInt(entry["Installs"].replaceAll(',',''))===newMostDownloaded[0].noOfDownloads){
            newMostDownloaded.push({name:entry["App"], noOfDownloads:parseInt(entry["Installs"].replaceAll(',',''))})
        }

        if(parseInt(entry["Size"])){
            
            let currentTotalSize=transFormedObj.averageSize*transFormedObj.appsWithSizeAvl
            transFormedObj.appsWithSizeAvl +=1
            transFormedObj.averageSize=(currentTotalSize+parseInt(entry["Size"]))/transFormedObj.appsWithSizeAvl
        }

        let newMostUpdated=transFormedObj.mostUpdated
        if(entry["Last Updated"]>newMostUpdated[0].lastupdatedOn){
            newMostUpdated=[{name:entry["App"], lastupdatedOn:entry["Last Updated"]}]
        }else if(entry["Last Updated"]===newMostUpdated[0].lastupdatedOn){
            newMostUpdated.push({name:entry["App"], lastupdatedOn:entry["Last Updated"]})
        }
        

        if(parseFloat(entry["Rating"])){
            let currentTotalRating=transFormedObj.averageRating*transFormedObj.appsWithRatingAvl
            transFormedObj.appsWithRatingAvl +=1
            transFormedObj.averageRating=(currentTotalRating+parseFloat(entry["Rating"]))/transFormedObj.appsWithRatingAvl
        }

        let newMostExpensiveApp=transFormedObj.mostExpensiveApp
        if(entry["Type"]==="Free"){
            transFormedObj.numberOfFreeApps +=1
        }else if(entry["Type"]==="Paid"){
            transFormedObj.numberOfPaidApps +=1
            
            if(parseFloat(entry["Price"].replaceAll("$",''))>newMostExpensiveApp[0].price){
                newMostExpensiveApp=[{name:entry["App"],price:parseFloat(entry["Price"].replaceAll("$",''))}]
            }else if(parseFloat(entry["Price"].replaceAll("$",''))===newMostExpensiveApp[0].price){
                newMostExpensiveApp.push({name:entry["App"],price:parseFloat(entry["Price"].replaceAll("$",''))})
            }
        }


        if(entry["Content Rating"]==="Everyone"){
            transFormedObj.numberOfAppsForEveryone +=1
        }else if(entry["Content Rating"]==="Teen"){
            transFormedObj.numberOfAppsForTeen +=1
        }else if(entry["Content Rating"]==="Everyone 10+"){
            transFormedObj.numberOfAppsForEveryone10Plus +=1
        }else if(entry["Content Rating"]==="Unrated"){
            transFormedObj.numberOfAppsForUnrated +=1
        }else if(entry["Content Rating"]==="Mature 17+"){
            transFormedObj.numberOfAppsForMature +=1
        }else if(entry["Content Rating"]==="Adults only 18+"){
            transFormedObj.numberOfAppsForAudultsOnly +=1
        }

        
        
        
        transFormedObj={...transFormedObj,appNames:newAppNames,totalCategoryDownloads:newTotalCategoryDownloads,mostDownloaded:newMostDownloaded, mostUpdated:newMostUpdated, mostExpensiveApp:newMostExpensiveApp}
    
        distinctCategories.splice(index,1,transFormedObj)
     
      })

})



const sentimentData=[]
appData.forEach(entry=>{
    entry["Category"].forEach(category=>{
      if(!(sentimentData.findIndex(entry=>entry.category===category)>-1)){
        sentimentData.push({category:category,id:crypto.randomUUID(),numberOfPositiveReviews:0, numberOfNegativeReviews:0, numberOfNeutralReviews:0})
      }
    })
  })

  Object.keys(finalReviews).forEach(app=>{
    let sentiments={
        positive:0,
        negative:0,
        neutral:0
    }

    finalReviews[app].forEach(entry=>{
        if(entry.Sentiment==="Positive"){
            sentiments.positive +=1
        }else if(entry.Sentiment==="Negative"){
            sentiments.negative +=1
        }else if(entry.Sentiment==="Neutral"){
            sentiments.neutral +=1
        }
    })
    let categories=appData.find(data=>data["App"]===app)?.Category
    if(categories){
        categories.forEach(category=>{
            let index=sentimentData.findIndex((cat)=>cat.category===category)
        let transFormedObj=sentimentData[index]
            transFormedObj.numberOfPositiveReviews=sentiments.positive
            transFormedObj.numberOfNeutralReviews=sentiments.neutral
            transFormedObj.numberOfNegativeReviews=sentiments.negative

        sentimentData.splice(index,1,transFormedObj)
        })
    }
  })

  console.log(sentimentData)

export {distinctCategories, sentimentData}