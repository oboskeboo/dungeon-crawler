export default function fight(state,newPos){
  const enemy = state.board[newPos.y][newPos.x]
  const player = state.player
  const level = state.level
  const damage = Math.floor((player.attack+player.weapon.attack)*(Math.random()+Math.random()))+1
  enemy.health -= damage
  player.action =  `You attacked the monster and did ${damage} damage ` 
  if(enemy.health >0) {
    const enemyAttpwr = Math.floor(((enemy.attack*(level+1))*(Math.random()+Math.random())+1) - (player.defence+player.armor.defence)) 
    player.health -= enemyAttpwr > 0 ? enemyAttpwr : 0
    player.counterAction =  ` Monster survived with ${enemy.health} health left, Monster attacks and hit your for ${enemyAttpwr > 0 ? enemyAttpwr : 0}` 
  }
  else if (enemy.health <=0){
    player.counterAction =`You KILLED the monster !`        
    player.xp += 10 
    
    if(player.xp >= 100*player.level){
      player.level++;
      player.attack++
      player.defence++
      //player.health += 50
    }

    if(state.board[newPos.y][newPos.x].type ==="B")
      state.bosskill = true
    

    state.board[newPos.y][newPos.x] = {
              id:state.board[newPos.y][newPos.x].id,
              type:"_"
            }
  }

  return state 
}