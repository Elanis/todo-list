import { useEffect, useState, createContext } from 'react';

export const TodoListContext = createContext();

const LOCALSTORAGE_KEY = 'LIST_STORAGE';

export default function TodoListContextProvider({ children }) {
	const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY);
	let defaultData = [];
	if(localStorageData) {
		const data = JSON.parse(localStorageData);

		if(Array.isArray(data)) {
			defaultData = data;
		}
	}

	const [list, setList] = useState(defaultData);

	useEffect(() => {
		localStorage.setItem(
			LOCALSTORAGE_KEY,
			JSON.stringify(list)
		);
	}, [list]);

	return (
		<TodoListContext.Provider value={{list, setList}}>
			{children}
		</TodoListContext.Provider>
	);
}