import {React, useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [toggle , setToggle] = useState(true)
  const {id , name , hp , sprites} = pokemon

  function handleToggle(){
    setToggle(toggle => !toggle)
  }

  const flipCard = toggle ? sprites.front : sprites.back
  return (
    <Card onClick={handleToggle}>
      <div>
        <div className="image" >
          <img alt="oh no!" src={flipCard}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
