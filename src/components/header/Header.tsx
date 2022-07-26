import React from "react";
import logo from '../../assets/logo.png';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';





export const Header:React.FC=(props:any)=>{
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header-logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <input
                            type="search"
                            id="headerSearch"
                            placeholder="search"
                        />
                        <label htmlFor="headerSearch">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </label>
                    </div>
                    <div className="col">
                        <div className="header-favorite">
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}