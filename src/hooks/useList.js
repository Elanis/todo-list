import { useContext } from 'react';

import { TodoListContext } from '../contexts/TodoListContext';

export default function useList() {
	const { list } = useContext(TodoListContext);

	return list;
}