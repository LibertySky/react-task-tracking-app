import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<p>Copyright &copy; 2021 LibertySky</p>
			<Link to='/about'>About</Link>
		</footer>
	);
}

export default Footer;
