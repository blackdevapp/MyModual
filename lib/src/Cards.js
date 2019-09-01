function Cards(){
    this.numbersCard = function() {
        return generateCardsName();
      }

      
}
function generateCardsName()
{
    let arr=[]
    for(i=2 ; i<15 ;i++)
    {
        arr.push(i+'S') 
    }
    for(i=2 ; i<15 ;i++)
    {
        arr.push(i+'H') 
    }
    for(i=2 ; i<15 ;i++)
    {
        arr.push(i+'D') 
    }
    for(i=2 ; i<15 ;i++)
    {
        arr.push(i+'C') 
    }
    return arr
}

module.exports = Cards