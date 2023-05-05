import useDeleteItemFromList from '../../hooks/useDeleteItemFromList';

import './index.css';

export default function ListElement({ index, value }) {
	const deleteItemFromList = useDeleteItemFromList();

	return (
		<>
			<li className="list-item">
				<span>{value}</span>
				<input className="delete-button" type="button" value='X' onClick={() => deleteItemFromList(index)} />
			</li>
		</>
	);
}