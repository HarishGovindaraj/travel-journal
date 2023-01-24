import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className='Main'>
            <div className='Left'>
                <img className='Image' src={props.links} alt=''></img>
            </div>

            <div className='Right'>
                <div>
                    <div className='Imageicon'>
                    <img src={require("../../Image/location-icon2.png")} alt='' width={20} ></img>
                    <p>{props.loctitle}</p>  <u style={{padding:"20px"}}>View on Google Maps</u> 
                    </div>
                    <h2>{props.Title}</h2>
                    <h4>{props.date}</h4>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Card