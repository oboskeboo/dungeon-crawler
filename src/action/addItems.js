export default function AddItems(state,items){  
  let board = state.board 
  const item = items.items
  const y = board.length-1
  const x = board[0].length-1
  
  item.forEach(function(i) {
    if( i[0] === "V" && state.visibleToggle === true)
      return
    board =  AddItem(board,i[1],0,x,y,i[0])  
  });

  if(items.exit)
    board =  AddItem(board,1,0,x,y,"D")  

  if(items.boss)
    board =  AddItem(board,1,0,x,y,"B")  
  
  return state.board
}



function AddItem(board,amount,prevAmount,x,y,type){

  if(prevAmount >= amount)
    return board

  const testX = Math.floor(Math.random()*x)
  const testY = Math.floor(Math.random()*y)
  if(board[testY][testX] === "_"){    
      board[testY][testX] = type
      prevAmount++
    }

  return AddItem(board,amount,prevAmount,x,y,type)
}