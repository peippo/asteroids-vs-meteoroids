import { Canvas } from "@react-three/fiber";
import Board from "./components/Board/Board";
import Controls from "./components/Controls";

const App = () => {
	return (
		<Canvas invalidateFrameloop={true}>
			<Controls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Board />
		</Canvas>
	);
};

export default App;
