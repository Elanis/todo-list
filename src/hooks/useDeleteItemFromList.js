import { useContext } from 'react';

import { TodoListContext } from '../contexts/TodoListContext';

export default function useDeleteItemFromList() {
	const { list, setList } = useContext(TodoListContext);

	return (index) => {
		setList(
			list.filter((_, i) => i !== index)
		);
	};
}