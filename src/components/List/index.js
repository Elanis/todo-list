import View from './view';

import useList from '../../hooks/useList';

export default function List() {
	const list = useList();

	return <View list={list} />;
}