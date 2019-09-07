import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create_Todo from './components/Create_Todo';
import Edit_Todo from './components/Edit_Todo';
import Todos_List from './components/Todos_List';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEdit);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a class='navbar-brand' href='#' target='_blank'>
              <FontAwesomeIcon icon={['fas', 'edit']} />
            </a>

            <Link to='/' className='navbar-brand'>
              MERN-Stack Todo App
            </Link>
            <div className='collpase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    Todos
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path='/' exact component={Todos_List} />
          <Route path='/edit/:id' component={Edit_Todo} />
          <Route path='/create' component={Create_Todo} />
        </div>
      </Router>
    );
  }
}

export default App;
