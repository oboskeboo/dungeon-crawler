import shortId from 'shortid'

export default function translateBoard (board = []) {
  return board.map(function(t){
   return t.map(function(l){ 
    if(l==="E")
      return enemy(shortId.generate(),l)
    
    if(l==="B")
      return boss(shortId.generate(),l)
      
    return standard(shortId.generate(),l)
    })
  }) 
}
const boss = (id,type) =>{  
  return {
    id:id,
    type:type,
    health : 24,
    attack : 24,
  }
}

 const enemy = (id,type) =>{
  return {
    id:id,
    type:type,
    health : 12,
    attack : 10,
  }
}

const standard = (id,type) =>{
  return {
    id:id,
    type:type
  }
}