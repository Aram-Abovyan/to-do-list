import React, { Component } from 'react';
import InputTextField from "./Components/InputTextField";
import ToDoButton from "./Components/ToDoButton";
import ToDoList from "./Components/ToDoList"
import listData from "./Data/listData";

class App extends Component {
  id = 1

  AddButtonData = {
    name: "add",
    color: "primary",
    text: "Add To List"
  }

  RemoveButtonData = {
    name: "remove",
    color: "secondary",
    text: "Remove Selected Items"
  }

  constructor() {
    super();
    
    this.state = {
      listData,
      inputValue: "",
      inputError: false,
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
    } else {

      for (let i = 0; i < listData.length; i++) {
        if (listData[i].completed === true) {
          listData.splice(i--, 1);
        }
      }
      
      this.setState({
        listData,
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <InputTextField
            inputError={this.state.inputError}
            inputValue={this.state.inputValue}
            handler={this.handleChange}
          />
          <ToDoButton
            buttonData={this.AddButtonData}
            handler={this.handleClick}
          />
        </div>

        <div>
          <ToDoList
            list={this.state.listData}
            handler={this.handleChange}
          />
          <ToDoButton
            buttonData={this.RemoveButtonData}
            handler={this.handleClick}
          />
        </div>
      </div>
      
    );
  }
}

export default App;
