import React from 'react';
import edit from '../../assets/img/edit.svg';

import './tasks.scss';

const Tasks = () => {
  return (
    <div className='tasks'>
      <h2 className='tasks__title'>
        Фронтенд
        <img src={edit} alt='edit-icon' />
      </h2>

      <div className='tasks__item'>
        <div className='tasks__item-row'>
          <div className='checkbox'>
            <input id='check' type='checkbox'></input>
            <label htmlFor='check'>
              <svg
                width='11'
                height='8'
                viewBox='0 0 11 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
                  stroke='black'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </label>
          </div>
          <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
