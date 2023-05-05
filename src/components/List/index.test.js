import { render, screen } from '@testing-library/react';
import List from './view';

import TodoListContextProvider from '../../contexts/TodoListContext';

test('Renders with empty array', () => {
	render(
		<TodoListContextProvider>
			<List list={[]} />
		</TodoListContextProvider>
	);
});

test('Renders with unique values', () => {
	render(
		<TodoListContextProvider>
			<List list={['test', 'foo', 'bar']} />
		</TodoListContextProvider>
	);
});

test('Renders with duplicate values', () => {
	render(
		<TodoListContextProvider>
			<List list={['test', 'foo', 'foo', 'bar']} />
		</TodoListContextProvider>
	);
});