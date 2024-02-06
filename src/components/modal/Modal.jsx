import { createPortal } from 'react-dom';
import { StyledModal, StyledModalContent } from './styles';

const Modal = ({ closeModal, children }) => {
	if (!children) return;

	return createPortal(
		<StyledModal>
			<StyledModalContent>
				{children}
				<button onClick={closeModal}>X</button>
			</StyledModalContent>
		</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
