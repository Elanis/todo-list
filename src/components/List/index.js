import ListElement from '../ListElement';

import useList from '../../hooks/useList';

import './index.css';

export default function List() {
	const list = useList();

	return (
		<ul className="list">
			{list.map((x, i) => <ListElement index={i} value={x} key={i} />)}
		</ul>
	);
}