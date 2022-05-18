import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask/SingleTask';

const Tasks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);
  // console.log(todos);
  return (
    <div className='w-3/4 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        todos.map(todo =><SingleTask
          key={todo._id}
          todo={todo}>
          </SingleTask>)
      }
    </div>
  );
};

export default Tasks;

