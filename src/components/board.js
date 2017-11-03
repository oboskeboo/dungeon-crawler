import React, { Component } from 'react'
import shortId from 'shortid'
import "../css/board.css"
import "../css/rpg-awesome.min.css"
import ResolveMove from "../action/resolveMove"
import ResolveBoard from "../action/resolveBoard"
import VisibleRange from "../action/visibleRange"
import Tile from "./tile"



const initialState={
  board:"",
  level:0,
  visible:[],
  visibleToggle:false,
  player:{
    level:1,
    xp:0,
    health: 100,
    weapon:{
      name:"fists",
      attack:0
    },
    armor:{
      name:"flimsy shirt",
      defence:0
    },
    attack: 1,
    defence:0,
    position:{x:0,y:0},
    vision:3,
    action:"The evil overlord kilgaroth has taken hold off the small village folkstad",
    counterAction:"The people off folkstad reaches out to you to save them from his evil grasp",
    bosskill:false
  }
  
}

export default class Board extends Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state={}
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
    const state = Object.assign({},initialState)

    this.setState(
      ResolveBoard(state,state.level)
    )
  }  

  handleKeyPress(e){
      const state = ResolveMove(e.keyCode,this.state)
      
      if(state.bosskill === true){
        state.player.action = "You killed the evil overlord kilgaroth"
        state.player.counterAction = "the people of folkstad is free once again"
        window.removeEventListener('keydown',this.handleKeyPress)
      }
      else if(state.player.health > 0){
        if(state.visible.length === 0 && state.visibleToggle === true)
          state.visible = VisibleRange(state.player.position,state.player.vision,state.board)
        }
      else{
        state.player.action = "YOU DIED!"
        state.player.action = "The evil overloard kilgaroths terror over folkstad continues"
        window.removeEventListener('keydown',this.handleKeyPress)
      }
      this.setState(state)
     
  }


  render() {
    const player = this.state.player
    const checkVision = visibleCheck(this.state.visible,this.state.visibleToggle);

    if(this.state.board === undefined){
      return (<p>Loading..</p>)
    }
    return (
      <div>
        <div className="playerStatus">
          Player Status:
          <p className="stats"> 
            <i className="ra ra-hearts"></i>{player.health} 
            <i className="ra ra-sword"></i>{player.attack + player.weapon.attack} 
            <i className="ra ra-shield"></i>{player.defence + player.armor.defence} 
            <i></i> Level:{player.level} XP:{player.xp} 
          </p>
          <div className="actions">
            <p className="action">{player.action}</p>
            <p className="action">{player.counterAction}</p>
          </div>
        </div>
        <div className="board" key="board">{
          this.state.board.map((line) => { 
           return <ul key={shortId.generate()} >
              {line.map((t) => {
                return(<Tile type={checkVision(t.id,t.type) }  key={t.id}/>)
              })}
            </ul>  
          })}
        </div>
      </div>)
  
  }
}



function visibleCheck(visible,visibleToggle){
  return function(id,type){
    if(!visibleToggle)
      return type

    return visible.includes(id) ? type : "X"
  }
}