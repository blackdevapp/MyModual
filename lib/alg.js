let RetrunMy = require('./Dealing')
let DefinitionRuler = require('./DefinitionRuler')
let FindWin = require('./FindWin')
let TurnFind = require('./TurnFind')



//==> Retrun Function From Base Module

function ModuleControl() {

  this.DefinitionRuler = function(array) {
    return   new  DefinitionRuler().definu(array);
  }

  this.FindWin = function(array,trump) {
    return   new  FindWin().findwin(array,trump);
  }


  this.TurnFind = function(UserStrat,UserWiner) {
    return   new  TurnFind().turnfind(UserStrat,UserWiner);
  }
  
    this.Dealing = function() {
      return   new  RetrunMy().deal();
    }
  }


  
  module.exports = ModuleControl;