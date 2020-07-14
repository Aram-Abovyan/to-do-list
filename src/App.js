import React, { Component } from 'react';
import InputTextField from "./Components/InputTextField";
import ToDoButton from "./Components/ToDoButton";
import ToDoList from "./Components/ToDoList"
import listData from "./Data/listData";
import ListItemEdit from "./Components/ListItemEdit";

class App extends Component {
  id = 1
  editId = null

  addButtonData = {
    color: "primary",
    text: "Add To List",
  }

  removeButtonData = {
    color: "secondary",
    text: "Remove Selected Items",
  }

  constructor() {
    super();
    
    this.state = {
      listData,
      inputValue: "",
      inputError: false,
      edit: false,
      editInputValue: "",
      editError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    
    if (name === "inputValue") {
      this.setState({
        [name]: value,
        inputError: false,
      });
    } else if (name === "editInputValue") {

      this.setState({
        [name]: value,
        editError: false,
      });

    } else {

      const listItem = listData.find(item => item.id === +value);
      listItem.completed = !listItem.completed;
      
      this.setState({
        listData,
      });
    }
  }

  handleClick(event) {
    const { textContent } = event.target;

    if (textContent === "Add To List") {

      const value = this.state.inputValue.trim();

      if (value.length === 0) {
        this.setState({
          inputError: true,
          inputValue: "Empty String Error"
        })

        return;
      }


      listData.push({
        id: this.id++,
        text: this.state.inputValue,
        completed: false,
      });
  
      this.setState({
        inputValue: "",
        listData,
      });
    } else if (textContent === "Remove Selected Items") {

      for (let i = 0; i < listData.length; i++) {
        if (listData[i].completed === true) {
          listData.splice(i--, 1);
        }
      }
      
      this.setState({
        listData,
      })
    } else if (textContent === "Edit") {
      const target = this.editId = event.target.parentElement.id;

      const editInputValue = listData.find(item => `${item.id}` === target).text;

      this.setState({
        edit: true,
        editInputValue, 
      });

    } else if (textContent === "Cancel") {
      this.setState({
        edit: false,
      });
    } else if (textContent === "Done") {
      
      listData.find(item => `${item.id}` === this.editId).text = this.state.editInputValue;
      this.setState({
        listData,
        editInputValue: "",
        edit: false,
      });
    }
  }

  render() {

    const outerStyles = {
      padding: 20,
    };

    const innerStyles = {
      margin: 20,
    }

    return (
      <div style={outerStyles}>
        <div  style={innerStyles}>
          <InputTextField
            inputName="inputValue"
            inputError={this.state.inputError}
            inputValue={this.state.inputValue}
            handler={this.handleChange}
          />
          <ToDoButton
            buttonData={this.addButtonData}
            handler={this.handleClick}
          />
        </div>

        <div  style={innerStyles}>
          <ToDoList
            list={this.state.listData}
            handler={this.handleChange}
            handleClick={this.handleClick}
          />
          <ToDoButton
            buttonData={this.removeButtonData}
            handler={this.handleClick}
          />
        </div>

        <ListItemEdit
          edit={this.state.edit}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          inputValue={this.state.editInputValue}
          editError={this.state.editError}
        />
      </div>
    );
  }
}

export default App;
