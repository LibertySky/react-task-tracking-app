import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({ title, onAdd, showAddBtn }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button
				color={showAddBtn ? 'red' : 'green'}
				text={showAddBtn ? 'Close' : 'AddTask'}
				onClick={onAdd}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker App',
};

Header.prototype = {
	title: PropTypes.string.isRequired,
};
export default Header;
