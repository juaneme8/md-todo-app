import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input, List } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase/app'; //52.9K (gziped: 12.2K)
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	container:{
	    display: 'flex',
    	justifyContent: 'center',
    	alignContent: 'center',
	}
}))

function App() {
	const classes = useStyles();
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('todos')
			.orderBy('timestamp', 'asc')
			.onSnapshot(snapshot => {
				const todosArr = snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }));
				setTodos(todosArr);
			});
	}, []);

	const addTodo = e => {
		e.preventDefault();

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className='App'>
			<h1>TODO App</h1>
			<form className={classes.container}> 
				<FormControl > 
					<InputLabel>Write a Todo</InputLabel>
					<Input value={input} onChange={e => setInput(e.target.value)} />
				</FormControl>

				<Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color='primary'>
					Add Todo
				</Button>
			</form>
			<List>
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} />
				))}
			</List>
		</div>
	);
}

export default App;
