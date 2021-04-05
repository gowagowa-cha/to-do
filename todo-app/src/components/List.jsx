import React from 'react';
import list from './assets/img/list.svg'

const List = () => {
	return (
		<ul className="todo__list">
			<li className="active">
				<i>
					<img src={list} alt="icon" />
				</i>
				<span>Все задачи</span>
			</li>
	</ul>
	);
};

export default List;
