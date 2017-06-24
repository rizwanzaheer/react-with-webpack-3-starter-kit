import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class ToDoItems extends Component {
  render() {
    return (<li onClick={() => {this.props.clickHandler(this.props.index)}}> {this.props.tasks.name} </li>);
  }
}

export default class Root extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      tasks: [{
        name: 'rizwan',
        complete: 'yes',
      },
      {
        name: 'Zaheer',
        complete: 'yes',
      },
      {
        name: 'Attique',
        complete: 'yes',
      },
      {
        name: 'Ahmed',
        complete: 'no',
      },
      ],
    };
  }
  componentWillMount() { 
    if(location.pathname){
      console.log(location.pathname);
    }
  }
  changeState(index) {
    alert('clicked!!!');
    console.log(this.state.tasks[index]);
  }
  render() {
    return (
      <div>
        <section>
          <h1> About Component view </h1>
          <ul>
            {
              this.state.tasks.map((task, index) => {
                return <ToDoItems key={task.name} clickHandler={this.changeState} tasks={task} index={index} />;
              })
            }
          </ul>
          <p>URL: { location.pathname }</p>
        </section>
      </div>
    );
  }
}
