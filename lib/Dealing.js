
let Cards = require('./src/Cards')
 
 let sourceArry = new Cards().numbersCard()  //loop number FROM 2 TO 14   H  S  D  C

function RetrunDealing(){
    this.deal = function() {
        return  FirstTrick() ;
      }
}


function FirstTrick(){
    //FirstTrick
    let A = sourceArry.getRandom(5)
    let Afilter = A.map(item=> sourceArry=sourceArry.filter(it=>it!==item))
  
    let B = Afilter[4].getRandom(5)
    let Bfilter = B.map(item=> Afilter[4]=Afilter[4].filter(it=>it!==item))
  
    let C = Bfilter[4].getRandom(5)
    let Cfilter = C.map(item=> Bfilter[4]=Bfilter[4].filter(it=>it!==item))
  
    let D = Cfilter[4].getRandom(5)
    let BDfilter = D.map(item=> Cfilter[4]=Cfilter[4].filter(it=>it!==item))
  
    ////////////////////////////////////////////////////////////////////////
  
    let FirstTrick =[]
  
    FirstTrick.push({id:'A',val:A},{id:'B',val:B},{id:'C',val:C},{id:'D',val:D})

   return SecondTrick(BDfilter[0],FirstTrick)
   // return FirstTrick

}

function SecondTrick(FirstArrya,FArray){

  //SecTrick
  let A = FirstArrya.getRandom(4)
  let Afilter = A.map(item=> FirstArrya=FirstArrya.filter(it=>it!==item))

  let B = Afilter[3].getRandom(4)
  let Bfilter = B.map(item=> Afilter[3]=Afilter[3].filter(it=>it!==item))

  let C = Bfilter[3].getRandom(4)
  let Cfilter = C.map(item=> Bfilter[3]=Bfilter[3].filter(it=>it!==item))

  let D = Cfilter[3].getRandom(4)
  let BDfilter = D.map(item=> Cfilter[3]=Cfilter[3].filter(it=>it!==item))

  ////////////////////////////////////////////////////////////////////////

  let SecondTrick =[]

  SecondTrick.push({id:'A',val:A},{id:'B',val:B},{id:'C',val:C},{id:'D',val:D})



 return ThirdTrick(BDfilter[3],SecondTrick,FArray)

}


function ThirdTrick(SecondArray,SecArray,FArray){
  // 
  //ThirdTrick
  let A = SecondArray.getRandom(4)
  let Afilter = A.map(item=> SecondArray=SecondArray.filter(it=>it!==item))

  let B = Afilter[3].getRandom(4)
  let Bfilter = B.map(item=> Afilter[3]=Afilter[3].filter(it=>it!==item))

  let C = Bfilter[3].getRandom(4)
  let Cfilter = C.map(item=> Bfilter[3]=Bfilter[3].filter(it=>it!==item))

  let D = Cfilter[3].getRandom(4)
 // let Dfilter = D.map(item=> Cfilter[3]=Cfilter[3].filter(it=>it!==item))

  ////////////////////////////////////////////////////////////////////////

  let ThirdTrick =[]

  ThirdTrick.push({id:'A',val:A},{id:'B',val:B},{id:'C',val:C},{id:'D',val:D})

  let result = [

    {
      trick:1,
      value:FArray
    },
    {
      trick:2,
      value:SecArray
    },
    {
      trick:2,
      value:ThirdTrick
    }

  ]

  
return result
 
}

//////
Array.prototype.getRandom= function(num, cut){
  var A= cut? this:this.slice(0);
  A.sort(function(){
      return .5-Math.random();
  });
  return A.splice(0, num);
}

module.exports = RetrunDealing