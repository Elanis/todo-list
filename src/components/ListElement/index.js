import useDeleteItemFromList from '../../hooks/useDeleteItemFromList';
import useUpdateItemFromList from '../../hooks/useUpdateItemFromList';

import './index.css';

export default function ListElement({ index, value }) {
	const deleteItemFromList = useDeleteItemFromList();
	const updateItemFromList = useUpdateItemFromList();

	return (
		<>
			<li className="list-item">
				<input className="edit-input" type="text" value={value} onChange={(e) => updateItemFromList(index, e.target.value)} />
				<input className="delete-button" type="button" value='X' onClick={() => deleteItemFromList(index)} />
			</li>
		</>
	);
}