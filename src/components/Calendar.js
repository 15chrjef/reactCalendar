import React from 'react';
import DayNames from './DayNames.js'
import Week from './Week';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import AngleLeft from 'react-icons/lib/fa/angle-left' ;
import AngleRight from 'react-icons/lib/fa/angle-right';
export default class Calendar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			month: this.props.selected.clone()
		}
	}
	previous(){
		var month = this.state.month;
		month.add(-1, 'M');
		this.setState({ month })
	}
	next(){
		var month = this.state.month;
		month.add(1, 'M')
		this.setState({ month })
	}
	
	renderWeeks(){
		var weeks = [],
		done = false,
		date = this.state.month.clone().startOf('month').day('Sunday'),
		monthIndex = date.month(),
		count = 0;

		while(!done){
			weeks.push(
				<Week 
					key={date.toString()} 
					date={date.clone()} 
					month={this.state.month} 
					select={this.props.select} 
					selected={this.props.selected} 
				/>
			);
			date.add(1, 'w');
			done = count++ > 2 && monthIndex !== date.month();
			monthIndex = date.month
		}

		return weeks
	}
	renderMonthLabel(){
		return <span>{this.state.month.format('MMMM, YYYY')}</span>;
	}
	render(){
		return(
			<div>
			<div style={{display:'flex', justifyContent:'center', alignItem:'center'}}>
				<AngleLeft 
					onClick={this.previous.bind(this)}
					style={{height: '50px', cursor: 'pointer', width: '50px'}}
					/>
				{this.renderMonthLabel()}
				<AngleRight 
					onClick={this.next.bind(this)}
					style={{height: '50px', cursor: 'pointer', width: '50px'}}
				/>
			</div>
				<DayNames/>
				{this.renderWeeks()}
			</div>
		)
	}
}