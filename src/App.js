import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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
	return (
		<div className='container'>
			<Header  />
			<Tasks tasks={tasks}/>
		</div>
	);
};

export default App;
