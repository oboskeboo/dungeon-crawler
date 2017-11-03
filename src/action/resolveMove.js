import {PickUp} from "../action/pickUp"
import Fight from "../action/fight"
import {Move,Direction} from "../action/move"
import ResolveBoard from "../action/resolveBoard"

export default function resolveMove (key,state) {
  

  const moveDirection = Direction(key)
  if(moveDirection === "NOMOVE") 
    return state;

  let board = state.board
  let player = state.player
  let newState = state
  const newPos =  {x:player.position.x+moveDirection.x,
                   y:player.position.y+moveDirection.y
                  }
  
  if(newPos.y > state.board.length-1 || newPos.y < 0 || newPos.x > state.board[0].length-1 || newPos.x < 0)
    return state

  const tileType = board[newPos.y][newPos.x].type
  player.action = ""
  player.counterAction = ""

  if (["W","H","A","V"].includes(tileType)) //check for pickup an resolve pickup
  {
    newState = PickUp(newState,newPos)
    newState.board[newPos.y][newPos.x] = 
    {
      id:newState.board[newPos.y][newPos.x].id,
      type:"_"
    }
  }
  else if  ( ["E","B"].includes(tileType)) //check for enemy and resolve fight
  {
    newState = Fight(newState,newPos)
    if(newState.player.Health <= 0 )
      return newState

  }

  else if  ( ["D"].includes(tileType)) //check for enemy and resolve fight
  {
    newState.player.action = "You found the door, opening reveals a stairwell"
    newState.player.counterAction = "you moved down a level "
    return ResolveBoard(newState,newState.level+1)
  }
 
  return  Move(newState,newPos) //check if move is allowed 
}
