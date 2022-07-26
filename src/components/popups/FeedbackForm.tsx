import React from "react";
import './feedbackForm.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';





export const FeedbackForm:React.FC=(props:any)=>{
    return(
        <div className="feedback-bg">
            <form className="feedback-form">
                <label htmlFor="">
                    <input type="text" />

                </label>
                 

            </form>
        </div>
        
    )
}