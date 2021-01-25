import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	// fetch data
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	const fetchTasks = async () => {
		const response = await fetch('http://localhost:5000/tasks');
		const data = await response.json();
		return data;
	};

	// add task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});
		const data = await res.json();
		setTasks([...tasks, data]);

		// create id for the task
		// const id = Math.floor(Math.random() * 10000) + 1;
		// const newTask = { id, ...task };
		// setTasks([...tasks, newTask]);
	};

	// delete task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// toggle reminder
	const reminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAddBtn={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
			) : (
				'No tasks yet'
			)}
		</div>
	);
};

export default App;
