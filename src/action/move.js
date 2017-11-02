 function Move(state,newPos){
  const playerpos = state.player.position
   if(state.board[newPos.y][newPos.x].type === "_"){
     state.board[playerpos.y][playerpos.x] = 
       {
         id:state.board[playerpos.y][playerpos.x].id,
         type:"_"
       }
     state.board[newPos.y][newPos.x] = {
       id:state.board[newPos.y][newPos.x].id,
       type:"P"
     }
     state.player.position = newPos
     state.visible = []
   }
   
   return state
 }

  function Direction(key) {
  let dir

   switch (key){
    case 37 : 
      dir = {
        dir:"left",
        x:-1,
        y:0
      }
      break;
    case 39 :
      dir ={
        dir:"right",
        x:1,
        y:0
      }
      break;
    case 38 :
      dir ={
        dir:"up",
        x:0,
        y:-1
      }
      break;
    case 40 :
      dir ={
        dir:"down",
        x:0,
        y:1
      }
      break;
    default:
      dir ="NOMOVE"
  }
  
  return dir 

}

export {Move,Direction}