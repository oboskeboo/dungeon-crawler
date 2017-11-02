import React from 'react'
import "../css/tile.css"

const Tile = ({type}) => {
    return (<li className="tile" id={type}></li>)
  }


export default Tile