export default function visibleRange (position = -1,vision = 0,board) {
  if (position === -1)
    return []
  const playerX = position.x
  const playerY = position.y
  const ySize = board.length
  const xSize = board[0].length
  const visionRange = []
  
  for(let y=0; y <= vision;y++){
      for(let x =0; x <= vision;x++ ){

        if(playerY+y < ySize && playerX+x <=xSize && board[playerY+y][playerX+x] != null)
          visionRange.push(board[playerY+y][playerX+x].id)
        if(playerY-y >=0 && playerX+x <=xSize && board[playerY-y][playerX+x] != null)  
          visionRange.push(board[playerY-y][playerX+x].id)  
        if(playerY-y >=0  && playerX-x >=0 && board[playerY-y][playerX-x] != null ) 
          visionRange.push(board[playerY-y][playerX-x].id )  
        if(playerY+y < ySize && playerX-x >=0 && board[playerY+y][playerX-x] != null)  
          visionRange.push(board[playerY+y][playerX-x].id)
      
    }
  }

return visionRange
  
  
}