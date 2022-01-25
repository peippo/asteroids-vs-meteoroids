import { Canvas } from "@react-three/fiber";
import Board from "./Board/Board";
import Controls from "./Controls";
import Stars from "./Stars";

const Game = () => {
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

export default Game;
