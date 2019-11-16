import React, { Component } from 'react';
import axios from 'axios';


class Create_Todo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoStartDate = this.onChangeTodoStartDate.bind(this);
    this.onChangeTodoCompleteDate = this.onChangeTodoCompleteDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completeddate: '',
      todo_completed: false
      
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onChangeTodoStartDate(e) {
    this.setState({
      todo_startdate: e.target.value
    });
  }

   onChangeTodoCompleteDate(e) {
    this.setState({
      todo_completeddate: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Startdate: ${this.state.todo_startdate}`);
    console.log(`Todo Completeddate: ${this.state.todo_completeddate}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_startdate: this.state.todo_startdate,
      todo_completeddate: this.state.todo_completeddate,
      todo_completed: this.state.todo_completed
      

  };

  axios.post('http://localhost:5555/todos/add', newTodo)
      .then(res => console.log(res.data));



    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completeddate: '',
      todo_completed: false
      
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>

          <div className='form-group'>
            <label>Responsible: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className='form-group'>
            <label>Start Date: </label>
            <input
              type='date'
              className='form-control'
              value={this.state.todo_startdate}
              onChange={this.onChangeTodoStartDate}
            />
          </div>
          <div className='form-group'>
            <label>Intended Completion Date: </label>
            <input
              type='date'
              className='form-control'
              value={this.state.todo_completeddate}
              onChange={this.onChangeTodoCompleteDate}
            />
          </div>
          
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.todo_priority === 'Low'}
                onChange={this.onChangeTodoPriority}
              />
              <label className='form-check-label'>Low</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.todo_priority === 'Medium'}
                onChange={this.onChangeTodoPriority}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.todo_priority === 'High'}
                onChange={this.onChangeTodoPriority}
              />
              <label className='form-check-label'>High</label>
            </div>
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Create Todo'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Create_Todo;
