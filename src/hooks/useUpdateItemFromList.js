import { useContext } from 'react';

import { TodoListContext } from '../contexts/TodoListContext';

export default function useUpdateItemFromList() {
	const { list, setList } = useContext(TodoListContext);

	return (index, newValue) => {
		setList(
			list.map((x, i) => {
				if(i !== index) {
					return x;
				}

				return newValue;
			})
		);
	};
}