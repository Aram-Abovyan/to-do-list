import React from 'react';
import Button from '@material-ui/core/Button';

function ToDoButton(props) {
    return (
        <div>
            <Button
                color={props.buttonData.color}
                onClick={props.handler}
                id={props.buttonId}
            >
                {props.buttonData.text}
            </Button> 
        </div>
        
    );
}

export default ToDoButton;