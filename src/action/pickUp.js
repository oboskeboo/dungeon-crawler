 import  {GenerateArmor,GenerateHealth,GenerateVision,GenerateWeapon} from "../action/generateItem"
 
 function PickUp(state,newPos){
  const powerUp = state.board[newPos.y][newPos.x]
  const player = state.player

  if(powerUp.type === "W"){ //WEAPON
    let weapon = player.weapon
    const newWeapon = GenerateWeapon(player.level)
    player.action=`You found ${newWeapon.name} with  ${newWeapon.attack} attack power `      
    if(newWeapon.attack >= weapon.attack ){
      player.counterAction=`Its a great weapon. You equip it and throw away your  ${weapon.attack} attack power weapon: ${weapon.name} `
      player.weapon = newWeapon
    }
    else{
      player.counterAction=`its dull and useless, you throw it back into the darkness`
    }
  } 
  if(powerUp.type === "A"){  //ARMOR
    let armor = player.armor
    const newArmor = GenerateArmor(player.level)
    player.action=`You found ${newArmor.name} with  ${newArmor.defence} defence `      
    if(newArmor.defence >= armor.defence ){
      player.counterAction=`You put on the Shiny new armor and throw away your  ${armor.defence}  decene,  ${armor.name} `
      player.armor = newArmor
    }
    else{
      player.counterAction=`its trash, you leave it in the dust`
    }
  } 
  if(powerUp.type === "H"){  //HEALTH
    const health = GenerateHealth(player.level)
    player.health+= health
    player.action = `You found a Potion of Health and drink it immediately`
    player.counterAction=`You get ${health} health back`
  } 
  if(powerUp.type === "V"){  //VISION
    player.vision += GenerateVision()
    player.action = `You found a Potion of Vision and drink it immediately`
    player.counterAction=`You are able to see longer into the darkness`
  } 
 
  return state
}

function AddPickUps(board,amount){
  return board
}

export {PickUp,AddPickUps}