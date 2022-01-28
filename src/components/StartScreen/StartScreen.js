import { Link } from "wouter";

const StartScreen = () => {
	return (
		<div>
			<Link to={`/host`}>Host game</Link>
			<Link to={`/join`}>Join game</Link>
		</div>
	);
};

export default StartScreen;
