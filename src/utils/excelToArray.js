import * as XLSX from 'xlsx';

export const excelConvertor=(filePath)=>{

    const file= filePath
    const reader = new FileReader()

    reader.onload=(e)=>{
        const data = new Uint8Array(e.target.result)
        const workbook= XLSX.read(data, {type:'array'})


        const sheetName= workbook.SheetNames[0]
        const sheet=workbook.Sheets[sheetName]


        const dataArray=XLSX.utils.sheet_to_json(sheet, {header:1, raw: false,
            dateNF: 'yyyy-mm-dd'})
        const headers = dataArray[0]
        let transformedArray=[]

        const resultArray= dataArray.slice(1).forEach(row=>{
            const obj={}
            let index=transformedArray.findIndex(row1=>row1.App==row[0])
            if(index>-1){
                let newRow=transformedArray[index]
                newRow.Category=[...newRow.Category,row[1]]
                transformedArray.splice(index,1,newRow)
            }else{
                row.forEach((value,index) => {
                    if(headers[index]==='Category'){
                        obj[headers[index]]=[value]
                    }else if(headers[index]==='Last Updated'){
                        obj[headers[index]]=new Date(value).getTime()
                    }else{
                        obj[headers[index]]=value
                    }
                    
                    
                });
                transformedArray.push(obj) 
            }
   
                   
        })
        console.log(transformedArray)
    }
    reader.readAsArrayBuffer(file);
}