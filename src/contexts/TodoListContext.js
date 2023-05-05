import { useState, createContext } from 'react';

export const TodoListContext = createContext();

export default function TodoListContextProvider({ children }) {
	const [list, setList] = useState([
		'Un',
		'Deux',
		'Trois'
	]);

	return (
		<TodoListContext.Provider value={{list, setList}}>
			{children}
		</TodoListContext.Provider>
	);
}