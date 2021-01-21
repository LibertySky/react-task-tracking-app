import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [showAddTask, setShowAddTask]=useState(false)
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Learn Vue',
			day: 'Jan 21 at 9:00am',
			reminder: false,
		},
		{
			id: 2,
			text: 'Visit dentist',
			day: 'Jan 20 at 12:00am',
			reminder: true,
		},
	]);

	// add task
	const addTask=(task)=>{
		const id =Math.floor(Math.random()*10000)+1
		const newTask={id,...task}
		setTasks([...tasks,newTask])
	}

	// delete task
	const deleteTask = (id) => {
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
			<Header onAdd={()=>setShowAddTask(!showAddTask)} showAddBtn={showAddTask}/>
			{showAddTask && <AddTask onAdd={addTask}/>}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
			) : (
				'No tasks yet'
			)}
		</div>
	);
};

export default App;
