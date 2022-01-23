import { Canvas } from "@react-three/fiber";
import Board from "./components/Board/Board";
import Controls from "./components/Controls";
import Stars from "./components/Stars";

const App = () => {
	return (
		<Canvas invalidateFrameloop={true}>
			<Controls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Board />
			<Stars count={1000} />
		</Canvas>
	);
};

export default App;
