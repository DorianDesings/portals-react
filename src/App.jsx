import { useState } from 'react';
import Modal from './components/modal/Modal';

const App = () => {
	const [content, setContent] = useState();
	return (
		<>
			<h1>PORTALS</h1>
			<button onClick={() => setContent(<h1>Marcos está dormido</h1>)}>
				Open Modal Ruedines
			</button>
			<button onClick={() => setContent(<h1>Enrique piensa raro</h1>)}>
				Open Modal Cabrero
			</button>
			<button onClick={() => setContent(<h1>Adri está de fiesta</h1>)}>
				Open Modal Paellas
			</button>

			<Modal closeModal={() => setContent()}>{content}</Modal>
		</>
	);
};

export default App;
