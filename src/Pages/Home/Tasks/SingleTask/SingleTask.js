import React, { useState } from 'react';
import { FcFullTrash, FcTodoList, FcDocument } from 'react-icons/fc';
import { IoIosCreate, IoIosTrash } from 'react-icons/io';

const SingleTask = ({ todo, handleDelete }) => {
  // console.log(handleDelete);
  const { _id, task, description, start, end } = todo;
  const [taskClick, setTaskClick] = useState(false);

  const completeTask = () => {
    console.log('click');
    setTaskClick(!taskClick);
  };
  // console.log('single todo',_id);
  return (
    <div className='card lg:max-w-lg bg-base-200 shadow-xl'>
      <div className='card-body text-center'>
        <div className='flex justify-between'>
          <div className=''>
            <FcTodoList></FcTodoList>
          </div>
          <div className='text-md text-slate-900'>
            <span>{start}:00--</span>
            <span>{end}:00</span>
          </div>
        </div>
        {taskClick ? (
          <s><h2 className='card-title flex justify-center'>{task}</h2></s>
        ) : (
          <h2 className='card-title flex justify-center'>{task}</h2>
        )}{' '}
        <p>{description}</p>
        <div className='card-actions flex justify-between mt-5'>
          <div className='text-3xl flex justify-between'>
            <div className='cursor-pointer'>
              <IoIosTrash onClick={() => handleDelete(_id)}></IoIosTrash>
            </div>
            <div className=''>
              <IoIosCreate className='ml-4'></IoIosCreate>
            </div>
          </div>
          <div className=''>
            <button
            onClick={completeTask}
              className='text-xsm capitalize bg-slate-800 text-white rounded-md p-2'
              
            >
              {
                taskClick?'Incomplete':'Complete'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
