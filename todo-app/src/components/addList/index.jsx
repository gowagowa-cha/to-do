import React, { useState, useEffect } from 'react';
import axios from 'axios'
import List from '../List'
import Badge from '../Badge/index';

import closeSvg from '../../assets/img/x.svg'

import './addButtonList.scss'

const AddList = ({ colors, onAdd }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [selectedColor, selectColor] = useState(3);
	const [isLoading, setIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		if (Array.isArray(colors)) {
		  selectColor(colors[0].id);
		}
	 }, [colors]);

	const onClouse = () => {
		setVisiblePopup(false);
		setInputValue('')
		selectColor(colors[0].id)
	}

	const addList = () => {
		if(!inputValue) {
			alert('Введите название списка');
			return;
		}
		setIsLoading(true);
		axios
		  .post('http://localhost:3001/lists', {
			 name: inputValue,
			 colorId: selectedColor
		  })
		  .then(({ data }) => {
			 const color = colors.filter(c => c.id === selectedColor)[0].name;
			 const listObj = { ...data, color: { name: color } };
			 onAdd(listObj);
			 onClouse();
		  })
		  	.catch(() => {
			alert('Ошибка при добавлении списка!')
		  })
		  	.finally(() => {
			 setIsLoading(false);
		  });
	}
	
	return (
		<div className="add-list">
			<List
			onClick={() => setVisiblePopup(true)}
      		items={[
         {
            className: 'list__add-button',
            icon: (
                <svg
                  width='11'
                  height='11'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 1V11'
                    stroke='#868686'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M1 6H11'
                    stroke='#868686'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
            ),
            name: 'Добавить список',
         },
      		]}
			/>
			{visiblePopup && <div className="add-list__popup">
				<img
					onClick={onClouse} 
					src={closeSvg} alt="Close button" 
					className="add-list__popup-close-btn"
				/>
				<input
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					className="field" 
					type="text" 
					placeholder="Название папки">
				</input>
				<div className="add-list__popup-colors">
					{colors.map((color) => (
						<Badge 
							onClick={() => selectColor(color.id)} 
							key={color.id} color={color.name}
							className={selectedColor === color.id && 'active'}
						/>
					))}
				</div>
				<button onClick={addList} className="button">
				 	{isLoading ? 'Добавление...' : 'Добавить'}
				</button>
			</div>}
		</div>
	)
}

export default AddList;
