import React from "react";


function Card(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img className="card__img" src={props.imgSrc} alt="netflix series" />
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h2 className="card__title">{props.sname}</h2>
                        <a href={props.link} target="_blank" className="card__link">Watch Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;