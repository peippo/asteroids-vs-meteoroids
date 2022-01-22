import { Canvas } from "@react-three/fiber";
import Board from "./components/Board";

const App = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Board />
		</Canvas>
	);
};

export default App;
