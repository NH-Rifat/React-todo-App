import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CreateTask = () => {
  const [user] = useAuthState(auth);
  const handleAddTodo=(event)=>{
    event.preventDefault();
    // console.log('handle add car');
    const todo = {
      task: event.target.name.value,
      description: event.target.description.value,
      start:event.target.start.value,
      end:event.target.end.value,
      email: user?.email,
    };
    event.target.reset();
    // console.log(todo);

    if (todo) {
      fetch(`http://localhost:5000/todo`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(todo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }


  }
  return (
    <div className='flex justify-center items-center mb-16'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>Todo</h2>
          <form onSubmit={handleAddTodo} className='space-y-3'>
            <div className='form-control w-full max-w-xs '>
              <input
                type='txt'
                name='name'
                placeholder='Your task'
                className='input input-bordered w-full max-w-xs input-info'
              />
            </div>
            <div className='form-control w-full max-w-xs'>
              <input
                type='txt'
                name='description'
                placeholder='Description'
                className='input input-bordered w-full max-w-xs input-info'
              />
            </div>
            <div className='m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 '>
              <input
                type='txt'
                name='start'
                placeholder='start time'
                className='input input-bordered input-sm w-full max-w-x '
              />
              <input
                type='txt'
                name='end'
                placeholder='end time'
                className='input input-bordered input-sm w-full max-w-x '
              />
            </div>

            <input
              className='btn w-full max-w-xs text-white capitalize font-semibold text-lg '
              type='submit'
              value='Create'
              
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
