import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={'/edit/' + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

class Todos_List extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  render() {
    return (
      <div>
        <p>Welcome to Todos List Component!!</p>
      </div>
    );
  }
}

export default Todos_List;
