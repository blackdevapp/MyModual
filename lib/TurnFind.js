function RetrunTurnFind(){
    this.turnfind = function(UserStrat,UserWiner) {
        return FetchDate(UserStrat,UserWiner);
      }
}


function FetchDate(UserStrat,UserWiner)
{
  
  if(UserWiner === UserStrat)  //==> If the user who started the game has won the game Meaning is turn agin :)
  {
     return UserWiner

  }
  else//==> Otherwise the next turn is next
  {
    let Users = ['A','B','C','D']
    let CapacityIndex=Users.length-1
    let curentIndex =Users.indexOf(UserStrat)+1
    console.log('curentIndex',curentIndex)
    console.log('CapacityIndex',CapacityIndex)
    if(curentIndex>CapacityIndex)
    {
       //retrun to A user
       return Users[0]
    }
    else
    {
      return Users[curentIndex]
    }
    
    


  }
}



module.exports = RetrunTurnFind