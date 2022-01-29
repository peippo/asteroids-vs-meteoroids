import { Router, Route } from "wouter";
import { socket, SocketContext } from "./services/socket";
import StartScreen from "./components/StartScreen/StartScreen";
import Host from "./components/StartScreen/Host";
import Join from "./components/StartScreen/Join";
import Game from "./components/Game";
import Hud from "./components/Hud/Hud";

const App = () => {
	return (
		<SocketContext.Provider value={socket}>
			<Router>
				<Route path="/" component={StartScreen} />
				<Route path="/host" component={Host} />
				<Route path="/join" component={Join} />
				<Route path="/game/:gameId" component={Hud} />
				<Game />
			</Router>
		</SocketContext.Provider>
	);
};

export default App;
