function GenerateWeapon(level){
  var weapon = weapons[Math.floor(Math.random()*(weapons.length))]
  return {
    name:weapon.name,
    attack : weapon.attack*level
  }
}
function GenerateArmor(level){
  var armor = armors[Math.floor(Math.random()*(armors.length))]
  return {
    name:armor.name,
    defence : armor.defence*level
  }
}
function GenerateHealth(level){
  return  Math.ceil((Math.random()*5)*5)
}
function GenerateVision(){
  return 1
}



const weapons = [
  {
    name:"Dull knife",
    attack:1
  },
  {
    name:"longsword of papercuts",
    attack:2
  },
  {
    name:"Axe of ages",
    attack:3
  },
  {
    name:"The unstoppable force",
    attack:5
  },
  {
    name:"The unstoppable force",
    attack:6
  }
]

const armors = [
  {
    name:"Dull knife",
    defence:1
  },
  {
    name:"longsword of papercuts",
    defence:2
  },
  {
    name:"Axe of ages",
    defence:3
  },
  {
    name:"The unstoppable force",
    defence:5
  },
  {
    name:"The unstoppable force",
    defence:6
  }
]

export {GenerateArmor,GenerateHealth,GenerateVision,GenerateWeapon}

