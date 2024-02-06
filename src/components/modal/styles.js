import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	color: aliceblue;
	background-color: transparent;
`;

const StyledModalContent = styled.div`
	width: 400px;
	height: 400px;
	background-color: #333;
`;

export { StyledModal, StyledModalContent };
