import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';
function Todo({ text }) {
	return (
		<ListItem className='todo__list'>
			<ListItemText primary={text} secondary={new Date().toLocaleString()} />
		</ListItem>
	);
}

export default Todo;
