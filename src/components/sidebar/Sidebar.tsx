import React from "react";
import './sidebar.scss';

export const Sidebar:React.FC=(props:any)=>{
    return(
        <aside>
            <nav className="aside-navi">
                <h3 className="aside-navi__title">publishers</h3>
                <ul className="aside-navi__list">
                    <li className="aside-navi-list__item current">Lorem, ipsum dolor.</li>
                    <li className="aside-navi-list__item">Lorem ipsum dolor sit.</li>
                    <li className="aside-navi-list__item">Lorem, ipsum dolor.</li>
                    <li className="aside-navi-list__item">Lorem ipsum dolor sit amet.</li>
                </ul>
            </nav>
        </aside>
    )
}