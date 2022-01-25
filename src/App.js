import { BrowserRouter, Routes, Route } from "react-router-dom";
import { socket, SocketContext } from "./services/socket";
import StartScreen from "./components/StartScreen/StartScreen";
import Host from "./components/StartScreen/Host";
import Join from "./components/StartScreen/Join";
import Game from "./components/Game";

const App = () => {
	return (
		<SocketContext.Provider value={socket}>
			<BrowserRouter>
				<Routes>
					<Route index element={<StartScreen />} />
					<Route path="/host" element={<Host />} />
					<Route path="/join" element={<Join />} />
					<Route path="game/:gameId" element={<Game />} />
				</Routes>
			</BrowserRouter>
		</SocketContext.Provider>
	);
};

export default App;
