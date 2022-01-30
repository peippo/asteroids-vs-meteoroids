import { useContextBridge } from "@react-three/drei";
import { StoreContext } from "../store";
import { SocketContext } from "../services/socket";
import { Canvas } from "@react-three/fiber";
import {
	EffectComposer,
	ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
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
				<pointLight position={[0, 2, 0]} color={"green"} intensity="10" />
				<Board />
				<Stars count={1000} />
				<EffectComposer>
					<ChromaticAberration
						blendFunction={BlendFunction.NORMAL}
						offset={[0.002, 0.001]}
					/>
				</EffectComposer>
			</ContextBridge>
		</Canvas>
	);
};

export default Game;
