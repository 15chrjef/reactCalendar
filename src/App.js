import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import date from 'moment';

class App extends Component {
  constructor(){
    super()
    this.state ={ selected: date()}
  }
  select(day){
		this.setState({
      selected: day.date
    })
	}
  render() {
    return (
      <div className="App">
        <Calendar select={this.select.bind(this)} selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
