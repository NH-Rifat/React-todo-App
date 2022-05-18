import React from 'react';
import { FcFullTrash,FcTodoList,FcDocument } from 'react-icons/fc';
import { IoIosCreate,IoIosTrash } from "react-icons/io";


const SingleTask = ({ todo }) => {
  // console.log(todo);
  const { task, description, start, end } = todo;
  // console.log('single todo',todo);
  return (
    <div class='card lg:max-w-lg bg-base-200 shadow-xl'>
      <div class='card-body text-center'>
      <FcTodoList></FcTodoList>
        <h2 class='card-title flex justify-center'>{task}</h2>
        <p>{description}</p>
        <div class='card-actions flex justify-between mt-5'>
          <div className='text-3xl flex justify-between'>
            <IoIosTrash></IoIosTrash>
            <IoIosCreate className='ml-4'></IoIosCreate>
          </div>
          <div className=''>
            <button class='text-xsm capitalize bg-slate-800 text-white rounded-md p-2'>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
