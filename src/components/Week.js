import React from 'react';
import moment from 'moment';

const Week = (props) => {	
	var days = [],
	date = props.date,
	month = props.month,
	selected = props.selected
	for(var i = 0; i < 7; i++) {
		var day = {}
		function hello(date){
				day.name= date.format('dd').substring(0, 1),
				day.number= date.date(),
				day.isCurrentMonth= date.month() === month.month(),
				day.isToday= date.isSame(new Date(), 'day'),
				day.date= date
				//console.log('day.date',day.date)
				var selected = moment(props.selected._d).isSame(day.date._d) ? 'selected' : '';

				return(
					<span 
							key={day.date.toString()} 
							className={'day' + ' ' + selected  } 
							onClick={function(day) {
								console.log('selected', 
								// moment(props.selected._d).isSame(day.date._d),
								moment(props.selected._d).isSame(day.date._d),
								selected
								)
								props.select(day)
							}.bind(null, day)}
						>
						{day.number}
					</span>
				)

		}
		hello(date)

		days.push(hello(date))
			
			date = date.clone();
			date.add(1, 'd');
	}
	return (
		<div className='week' key={days[0].toString()}>
			{days}
		</div>
	)
}	

export default Week