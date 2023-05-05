import useList from '../../hooks/useList';

export default function List() {
	const list = useList();

	return (
		<ul>
			{list.map((x, i) => <li key={i}>{x}</li>)}
		</ul>
	);
}