import { useContextBridge } from "@react-three/drei";
import { StoreContext } from "../store";
import { SocketContext } from "../services/socket";
import { Canvas } from "@react-three/fiber";
import Board from "./Board/Board";
import Controls from "./Controls";
import Stars from "./Stars";

const Game = () => {
	const ContextBridge = useContextBridge(StoreContext, SocketContext);

	return (
		<Canvas invalidateFrameloop={true}>
			<ContextBridge>
				<Controls />
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Board />
				<Stars count={1000} />
			</ContextBridge>
		</Canvas>
	);
};

export default Game;
