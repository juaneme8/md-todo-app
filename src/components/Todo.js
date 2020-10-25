import { ListItem, ListItemText, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './Todo.css';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

function Todo(props) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState(props.todo.todo);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const useStyles = makeStyles(theme => ({
		paper: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: 'none',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}));
	const classes = useStyles();

	const updateTodo = () => {
		db.collection('todos').doc(props.todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setOpen(false);
	};

	return (
		<>
			<Modal open={open} onClose={handleClose} aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description'>
				<div className={classes.paper}>
					<h2>Editar Todo</h2>
					<input value={input} onChange={e => setInput(e.target.value)} />
					<button onClick={updateTodo}>Actualizar</button>
				</div>
			</Modal>
			<ListItem>
				<ListItemText primary={props.todo.todo} secondary='Just another task' />
				<DeleteIcon className='deleteBtn' onClick={e => db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
				<EditIcon onClick={handleOpen}></EditIcon>
			</ListItem>
		</>
	);
}

export default Todo;
