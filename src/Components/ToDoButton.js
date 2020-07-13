import React from 'react';
import Button from '@material-ui/core/Button';

function ToDoButton(props) {
    return (
        <div>
            <Button
                name={props.buttonData.name}
                color={props.buttonData.color}
                onClick={props.handler}
            >
                {props.buttonData.text}
            </Button> 
        </div>
        
    );
}

export default ToDoButton;