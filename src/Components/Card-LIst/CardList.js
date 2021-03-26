import React from 'react'
import '../Card-LIst/Card_List_style.css'
import Card_Component, {Card} from '../Card/Card_Component'
function CardList(props) {
    return (
        <>
            <h2 className="Card_list">
                {
                    props.Monster.map( monster =>( 
                    <Card_Component key={monster.id} monster={monster}/> 
                    ))
                }
            </h2>
        </>
    )
}

export default CardList

