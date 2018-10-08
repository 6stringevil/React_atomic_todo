import React, { Component } from 'react';
import Inputbox from "../../atoms/todoform/todo_input";
import Formbutton from "../../atoms/todoform/todo_submit";
class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            todotask : "",
            done: false,
        }
    }

    guid = () => {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        var inputelement = document.getElementById("form-input");
        if(inputelement.value !== "" || inputelement.value === " "){
            var element = document.getElementById("form-error");
            element.classList.add("hide");
            element.classList.remove("show");
        }
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var inputelement = document.getElementById("form-input");
        
        if(inputelement.value === "" || inputelement.value === " " || inputelement.value === "undefined" ){
            var element = document.getElementById("form-error");
            element.classList.remove("hide");
            element.classList.add("show");
            return false;
        }

        const newelement = {
            task : this.state.task,
            id: this.guid(),
            done : false
        };
     //console.log("new element is: "+newelement.task+newelement.id+newelement.done);
      this.props.addTask(newelement);
      inputelement.value = "";
    }

    render(){
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <Inputbox placeholdertext="Enter Task Name" id="form-input" name="task" onchange={this.handleChange} />
                <div className="error-msg hide" id="form-error">Please Enter valid taskname</div>
                <Formbutton buttontext="Submit Task" buttontype="submit"/>
            </form>
        );
    }
    
}

export default TodoForm;