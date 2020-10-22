import React, { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState(['Tarea 1', 'Tarea 2']);
	const [input, setInput] = useState([]);

	const addTodo = e => {
		e.preventDefault();
		setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className='App'>
			<h1>TODO App</h1>
			<form>
				<input type='text' value={input} onChange={e => setInput(e.target.value)} />
				<button onClick={addTodo}>Add Todo</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
