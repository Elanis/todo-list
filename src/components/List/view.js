import ListElement from '../ListElement';

import './index.css';

export default function List({ list }) {
	return (
		<ul className="list">
			{list.map((x, i) => <ListElement index={i} value={x} key={i} />)}
		</ul>
	);
}