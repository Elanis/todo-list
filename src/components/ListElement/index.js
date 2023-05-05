import useDeleteItemFromList from '../../hooks/useDeleteItemFromList';

export default function ListElement({ index, value }) {
	const deleteItemFromList = useDeleteItemFromList();

	return (
		<>
			<li>
				{value}
				<input type="button" value='X' onClick={() => deleteItemFromList(index)} />
			</li>
		</>
	);
}