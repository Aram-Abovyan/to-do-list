import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToDoButton from "./ToDoButton";
import InputTextField from "./InputTextField";

function ListItemEdit(props) {

    const cancelButtonData = {
        color: "primary",
        text: "Cancel",
    }

    const doneButtonData = {
        color: "primary",
        text: "Done",
    }

    return (
        <div>
            <Dialog open={props.edit} /*onClose={handleClose}*/ aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>

                <InputTextField />
                
                </DialogContent>
                <DialogActions>
                    <ToDoButton
                        buttonData={cancelButtonData}
                        handler={props.handleClick}
                    />

                    <ToDoButton
                        buttonData={doneButtonData}
                        handler={props.handleClick}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ListItemEdit;