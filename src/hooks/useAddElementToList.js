import { useContext } from 'react';

import { TodoListContext } from '../contexts/TodoListContext';

export default function useAddElementToList() {
	const { list, setList } = useContext(TodoListContext);

	return (newVal) => {
		setList([...list, newVal]);
	};
}