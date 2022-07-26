import React from "react";
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


export const Card:React.FC=(props:any)=>{
    return(
                <div className="card">
                    <div className="card-row card-row--top"></div>
                    <div className="card-row card-row--bottom">
                        <h4 className="car-name">name</h4>
                        <ul className="card-about-list">
                            <li className="card-about-list__item">
                                <span>publ:</span>
                                <span>cartoon books incorpareted</span>
                            </li>
                            <li className="card-about-list__item">
                                <span><FontAwesomeIcon icon={faThumbsUp}/>:</span>
                                <span>3</span>
                            </li>
                            <li className="card-about-list__item">
                                <span>year:</span>
                                <span>2022</span>
                            </li>
                        </ul>
                        <div className="card-buttons">
                            <button>more about</button>
                            <button>add to favorites</button>
                        </div>
                    </div>
                </div>
    )
}