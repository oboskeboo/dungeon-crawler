import AddItems from "../action/addItems"
import GetBoard from "../action/boards"
import TranslateBoard from "../action/translateBoard"
import VisibleRange from "../action/visibleRange"

export default function resolveBoard(state,level){
  const newState = state
  const board = GetBoard(level,false)    
  
  newState.board =  board.board
  newState.player.position =  Object.assign({},board.player) 
  newState.board[board.player.y][board.player.x] = "P"
  newState.board = AddItems(newState,board)
  newState.board = TranslateBoard(newState.board)  
  newState.visible = VisibleRange(newState.player.position,newState.player.vision,newState.board)

  return newState
}