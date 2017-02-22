import React from 'react';
import DayNames from './DayNames.js'
import Week from './Week';
import FontAwesome from 'react-fontawesome';
import '../App.css';

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
			 <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
				onClick={this.previous}
      />
				<FontAwesome name='rocket'          size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', width: '100px', height: '100px' }}

/>
				{this.renderMonthLabel()}
				<i className='fa fa-angle-right' onClick={this.next}></i>
				<DayNames/>
				{this.renderWeeks()}
			</div>
		)
	}
}