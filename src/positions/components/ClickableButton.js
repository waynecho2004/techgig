import React from 'react';

function ClickableButton(props) {

    return (
        //className="btn btn-primary  btn-sm"
        <button className="btn btn-primary  btn-sm" 
        onClick={props.onClick}>{props.buttonTitle}</button>
    )

}
export default ClickableButton;