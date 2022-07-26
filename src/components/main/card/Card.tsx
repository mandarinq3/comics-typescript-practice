import React from "react";
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


export const Card:React.FC=(props:any)=>{
    const books = [{
        "id": 0,
        "publisher":"Marvel",
        "name": "Человек паук. Черная кошка",
        "year": 2019,
        "img": "../img/galaxyGuard.jpeg",
        "alt": "book of blood"
      }]
    return(
                <div className="card" style={{background:`url(${books[0].img})`}}>
                    <div className="card-row card-row--top" >
                    </div>
                    <div className="card-row card-row--bottom">
                        <h4 className="car-name">{books[0].name}</h4>
                        <div className="card-about">
                        <span>cartoon books incorpareted</span>
                                <span>2022</span>
                        </div>     
                        <div className="card-buttons">
                            <button>details</button>
                            <button><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                </div>
    )
}