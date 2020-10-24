import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';
function Todo({ text }) {
	return (
		<ListItem>
			<ListItemText primary={text} secondary={text} />
		</ListItem>
	);
}

export default Todo;
