import styled from "styled-components";

const Tooltip = ({ children }) => {
	return <TooltipWrapper>{children}</TooltipWrapper>;
};

const TooltipWrapper = styled.span`
	position: absolute;
	font-size: 16px;
	width: 1px;
	height: 1px;
	padding: 0;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
	background: var(--hud-background);
	color: var(--color-white);
	line-height: normal;
	top: 40%;
	transform: translateY(-50%);
	left: calc(100% + 5px);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	display: inline-block;
	opacity: 0;
	visibility: hidden;
	transition: 0.25s;
	text-transform: none;

	&::before {
		content: "";
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		z-index: 1;
		width: 0;
		height: 0;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 10px solid transparent;
		border-right: 10px solid rgb(37 46 72 / 80%);
	}
`;

export default Tooltip;
