import React from 'react';

function ClickableButton(props) {

    return (
        <button onClick={props.onClick}>{props.buttonTitle}</button>
    )

}
export default ClickableButton;