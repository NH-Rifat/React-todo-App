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

  const handleDelete = (todoId) => {
    // console.log(todoId);
    if (todoId) {
      const confirmation = window.confirm('Are you Sure to Delete?');
      if (confirmation) {
        fetch(`http://localhost:5000/todos/${todoId}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingTodo = todos.filter((todo) => todo._id !== todoId);
            setTodos(remainingTodo);
          });
      }
    }
  };
  return (
    <div className='w-3/4 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {todos.map((todo) => (
        <SingleTask
          key={todo._id}
          todo={todo}
          handleDelete={handleDelete}
        ></SingleTask>
      ))}
    </div>
  );
};

export default Tasks;
