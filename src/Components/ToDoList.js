import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemSwitch from "./ListItemSwitch";
import ToDoButton from "./ToDoButton";

function ToDoList(props) {

  const editButtonData = {
    color: "primary",
    text: "Edit",
  };

  const listComponents = props.list.map(item => {
    return (
      <ListItem key={item.id}>
        <ListItemSwitch
          handler={props.handler}
          valueData={item.id}
        />

        <ListItemText
          primary={item.text}
        />

        <ToDoButton
          buttonData={editButtonData}
          handler={props.handleClick}
          buttonId={item.id}
        />
      </ListItem>
    );
  });

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6">
        To Do List
      </Typography>
      <div>
        <List>
          { listComponents }
        </List>
      </div>
    </Grid>
  );
}

export default ToDoList;