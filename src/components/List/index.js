import ListElement from '../ListElement';

import useList from '../../hooks/useList';

export default function List() {
	const list = useList();

	return (
		<ul>
			{list.map((x, i) => <ListElement value={x} key={i} />)}
		</ul>
	);
}