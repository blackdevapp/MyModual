
let Cards = require('./src/Cards')
let sourceArry = new Cards().numbersCard()  //loop number FROM 2 TO 14   H  S  D  C
let Users = ['A','B','C','D']
function RetrunDefinition(){
    this.definu = function(array) {
       // return 'RetrunDefinition!';
       return GenareteTrump()
      }
}

function GenareteTrump(){
    //FirstTrick
    let Round1=[]
    let Round2=[]
    let Round3=[]
    let Round4=[]
    let Round5=[]
    let Round6=[]
    let Round7=[]
    let Round8=[]
    let Round9=[]
    let A = sourceArry.getRandom(4)
    A.map((item,index)=>  Round1.push({id:Users[index],val:item }))
    let Afilter = A.map(item=>  sourceArry=sourceArry.filter(it=>it!==item) )
  
    let B = Afilter[3].getRandom(4)
    B.map((item,index)=>  Round2.push({id:Users[index],val:item }))
    let Bfilter = B.map(item=> Afilter[3]=Afilter[3].filter(it=>it!==item))
  
    let C = Bfilter[3].getRandom(4)
    C.map((item,index)=>  Round3.push({id:Users[index],val:item }))
    let Cfilter = C.map(item=> Bfilter[3]=Bfilter[3].filter(it=>it!==item))
  
    let D = Cfilter[3].getRandom(4)
    D.map((item,index)=>  Round4.push({id:Users[index],val:item }))
    let Dfilter = D.map(item=> Cfilter[3]=Cfilter[3].filter(it=>it!==item))

    let E = Dfilter[3].getRandom(4)
    E.map((item,index)=>  Round5.push({id:Users[index],val:item }))
    let Efilter = E.map(item=> Dfilter[3]=Dfilter[3].filter(it=>it!==item))

    let F = Efilter[3].getRandom(4)
    F.map((item,index)=>  Round6.push({id:Users[index],val:item }))
    let Ffilter = F.map(item=> Efilter[3]=Efilter[3].filter(it=>it!==item))

    let G = Ffilter[3].getRandom(4)
    G.map((item,index)=>  Round7.push({id:Users[index],val:item }))
    let Gfilter = G.map(item=> Ffilter[3]=Ffilter[3].filter(it=>it!==item))

    let H = Gfilter[3].getRandom(4)
    H.map((item,index)=>  Round8.push({id:Users[index],val:item }))
    let Hfilter = H.map(item=> Gfilter[3]=Gfilter[3].filter(it=>it!==item))

    let J = Hfilter[3].getRandom(4)
    J.map((item,index)=>  Round9.push({id:Users[index],val:item }))
    let Jfilter = J.map(item=> Hfilter[3]=Hfilter[3].filter(it=>it!==item))



    
   
    return [Round1,Round2,Round3,Round4,Round5,Round6,Round7,Round8,Round9]

}

//////
Array.prototype.getRandom= function(num, cut){
    var A= cut? this:this.slice(0);
    A.sort(function(){
        return .5-Math.random();
    });
    return A.splice(0, num);
  }
module.exports = RetrunDefinition