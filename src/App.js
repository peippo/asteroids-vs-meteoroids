import { Canvas } from "@react-three/fiber";
import Board from "./components/Board";

const App = () => {
	return (
		<Canvas>
			<ambientLight />
			<Board />
		</Canvas>
	);
};

export default App;
