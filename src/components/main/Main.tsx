import React from "react";
import './main.scss';
import { Card } from "./card/Card";


export const Main:React.FC=(props:any)=>{
    return(
        <main className="main">
            <ul className="main-head">
               <li className="main-head__item current">best</li>
               <li className="main-head__item ">new</li>
               <li className="main-head__item">old</li> 
            </ul>
            <section className="main-body">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <div className="show-more-btn">
                <button>more</button>
            </div>
        </main>
    )
}