function RetrunFindWin(){
    this.findwin = function(array,trump) {
        return winFinder(array,trump);
      }
}
function winFinder(array,trump){
  let resTrump=[]
 let res =[]

 
let resultFetch = array.map(it=>FetchDataSuit(it.value,it.id)) //res=>> [id,suit,number]

resultFetch.map(it=>res.push(it[2]))  //-->equals method
let MaxNumber =Math.max(...res)

let result =resultFetch.filter(x => parseInt(x[2]) === MaxNumber);
let resultTrump =resultFetch.filter(x => x[1]=== trump);


if(resultTrump.length === 0)  //if have trupm on grand or no
{
  return result

}
else{

 return IfHaseTrump(resultTrump)
}





}

function IfHaseTrump(resultTrump){
  let res =[]
  
  resultTrump.map(it=>res.push(it[2]))  //-->equals method
  let MaxNumber =Math.max(...res)
  let result =resultTrump.filter(x => parseInt(x[2]) === MaxNumber);
  
 
  return result

}

function FetchDataSuit(obj,id){ 
  if(obj.includes('S'))
  {
     return [id,'S',obj.replace("S", "")]
  }
  else if(obj.includes('H'))
  {
    return [id,'H',obj.replace("H", "")]
  }
  else if(obj.includes('D'))
  {
    return [id,'D',obj.replace("D", "")]
  }
  else if(obj.includes('C'))
  {
    return [id,'C',obj.replace("C", "")]
  }
}



module.exports = RetrunFindWin