import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input, List } from '@material-ui/core';
import Todo from './components/Todo';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const addTodo = e => {
		e.preventDefault();
		setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className='App'>
			<h1>TODO App</h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo</InputLabel>
					<Input value={input} onChange={e => setInput(e.target.value)} />
				</FormControl>

				<Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color='primary'>
					Add Todo
				</Button>
			</form>
			<List>
				{todos.map(todo => (
					<Todo text={todo} />
				))}
			</List>
		</div>
	);
}

export default App;
