import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import TodoListContextProvider from './contexts/TodoListContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<TodoListContextProvider>
			<App />
		</TodoListContextProvider>
	</React.StrictMode>
);
