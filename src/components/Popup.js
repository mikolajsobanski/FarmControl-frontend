import React from "react";
import './css/popup.css'
import {GrClose} from 'react-icons/gr'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn" onClick={() => props.setTrigger(false)}> <GrClose /></div>
                {props.children}
            </div>
            
        </div>
    ) : ""
}

export default Popup