import React from 'react';

const DayNames = () => {
	var daySpans = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((name, i) => {
		return <span key={i} className='day'>{name}</span>
	})
	return(
		<div className='week names'>
			{daySpans}
		</div>
	)
}

export default DayNames;