import React from 'react'
import '../Card/Card_component.css'
function Card_Component(props) {
    return (
        <div className="card_container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2$size=180*180`} alt="monster"/>
            <h3>{props.monster.name}</h3>
        </div>
    )
}

export default Card_Component
