import { ListItem, ListItemText, Modal } from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
	return (
		<>
			<ListItem>
				<ListItemText primary={props.todo.todo} secondary={props.todo.timestamp} />
				<DeleteIcon className='deleteBtn' onClick={e => db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
			</ListItem>
		</>
	);
}

export default Todo;
