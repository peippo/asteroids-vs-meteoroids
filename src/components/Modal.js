import styled from "styled-components";

const Modal = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	min-width: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: 1000;
	background: var(--hud-background);
	box-shadow: var(--hud-box-shadow), 0 20px 50px rgb(0 0 0 / 50%);
	border-radius: 5px;
	padding: 2rem 3rem;
	text-align: center;
`;

export default Modal;
