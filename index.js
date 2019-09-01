let myModule = require('./lib/alg');//==> import module

let myModuleInstance = new myModule(); //==> create new instance 


//Examples :

//*************************** */
//Dealing Test
console.log('Dealing =line 5 => ',myModuleInstance.Dealing()) //--> dealing number 2 to 14   && 14 is  Meaning  A  

//*************************** */
//FindWin

let TestArray =[{id: 'A',value:'12S'},{id: 'B',value:'8C'},{id: 'C',value:'6H'},{id: 'D',value:'8D'}] //==>> exp:A deck of cards
let Trump ='D'

console.log('FindWin =Line 16===>',myModuleInstance.FindWin(TestArray,Trump))

//*************************** */
//Turn
let UserStrat ='C' //=> A B C D
let UserWiner='B'  //=> A B C D

console.log(myModuleInstance.TurnFind(UserStrat,UserWiner))
//*************************** */
//FindTrump :)
console.log(myModuleInstance.DefinitionRuler('DefinitionRuler'))



