import { useState } from "react";
import styled from "styled-components";
import useChat from "../hooks/useChat";
import { ReactComponent as ChatIcon } from "../icons/comment-alt-lines-solid.svg";
import { ReactComponent as SubmitIcon } from "../icons/chevron-left-solid.svg";

const Chat = () => {
	const [inputValue, setInputValue] = useState("");
	const [messages, sendMessage] = useChat();
	const [chatVisible, setChatVisible] = useState(false);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendMessage(inputValue);
		setInputValue("");
	};

	return (
		<Wrapper
			onMouseEnter={() => setChatVisible(true)}
			onMouseLeave={() => setChatVisible(false)}
		>
			<Messages isVisible={chatVisible}>
				{messages.map((message, index) => (
					<li key={index}>
						<Id>&lt;{message.userId}&gt;</Id> {message.content}
					</li>
				))}
			</Messages>

			<Form onSubmit={handleSubmit} autocomplete="off">
				<Label htmlFor="chat-input">
					<StyledChatIcon />
					<span className="screen-reader-text">Chat</span>
				</Label>
				<Input
					id="chat-input"
					type="text"
					value={inputValue}
					onChange={handleChange}
					maxLength="40"
					autoComplete="off"
				/>
				<Button type="submit">
					<StyledSubmitIcon />
					<span className="screen-reader-text">Send</span>
				</Button>
			</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 15;

	&:focus-within {
		ul {
			opacity: 1 !important;
		}
	}
`;

const Messages = styled.ul`
	list-style-type: none;
	margin: 1rem;
	padding: 0;
	opacity: ${({ isVisible }) => (isVisible ? "1" : "0.4")};
	transition: opacity 1s;

	li {
		padding: 0.25rem;
	}
`;

const Id = styled.span`
	color: var(--color-light-green);
`;

const Form = styled.form`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
`;

const Label = styled.label`
	margin: 0;
`;

const StyledChatIcon = styled(ChatIcon)`
	width: 32px;
	height: 32px;
`;

const StyledSubmitIcon = styled(SubmitIcon)`
	width: 12px;
	height: 32px;
	transform: rotate(180deg);
`;

const Input = styled.input`
	border-bottom: 1px solid var(--color-light-green);
	width: 150px;
	text-align: right;
	background: transparent;

	&:focus {
		background: rgb(0 0 0 / 75%);
	}

	@media (min-width: 600px) {
		width: 300px;
		background: transparent !important;
	}
`;

const Button = styled.button`
	border-radius: 18px 5px 10px 5px;
	padding: 0;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		border-radius: 18px 5px 10px 5px;
	}
`;

export default Chat;
