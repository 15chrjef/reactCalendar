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
    								console.log('selected', day.date._d)

		this.setState({
      selected: day.date
    })
    console.log(day.date)
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
