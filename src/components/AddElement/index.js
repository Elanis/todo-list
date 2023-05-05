import { useState } from 'react';

import useAddElementToList from '../../hooks/useAddElementToList';

export default function AddElement() {
	const addElementToList = useAddElementToList();
	const [inputVal, setInputVal] = useState('');

	function handleInputValChange(e) {
		setInputVal(e.target.value);
	}

	function handleButtonClick() {
		if(inputVal === '') {
			return;
		}

		addElementToList(inputVal);
		setInputVal('');
	}

	return (
		<>
			<input 
				type="text"
				value={inputVal}
				onChange={handleInputValChange}
			/>
			<input
				type="button"
				value="Ajouter"
				onClick={handleButtonClick}
			/>
		</>
	)
}