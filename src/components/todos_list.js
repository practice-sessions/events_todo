import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_priority}
    </td>

    <td>
      <Link to={'/Start Date/' + props.todo._id}>Start Date</Link>
    </td>
    <td>
      <Link to={'/Completed Date/' + props.todo._id}>Completed Date</Link>
    </td>
    <td>
      <Link to={'/edit/' + props.todo._id}>Edit</Link>
    </td>

    <td>
      <Link to={'/delete/' + props.todo._id}>Delete</Link>
    </td>
  </tr>
);

class Todos_List extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5555/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>Completed Date</th>
              <th>Edit Todo</th>
              <th>Delete Todo</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Todos_List;
