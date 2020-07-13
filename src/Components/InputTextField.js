import React from 'react';
import TextField from '@material-ui/core/TextField';

function InputTextField(props) {
    return (
        <TextField
          name="inputValue"
          onChange={props.handler}
          error={props.inputError}
          id="standard-error-helper-text"
          label="To Do List Item"
          // defaultValue="Hello World"
          helperText="What you need to do"
          value={props.inputValue}
        />
    );
}

export default InputTextField;