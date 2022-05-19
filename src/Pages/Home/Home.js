import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CreateTask from '../CreateTask/CreateTask';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Tasks from './Tasks/Tasks';
// import RequireAuth from '../Login/RequireAuth';

const Home = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <Banner></Banner>

      {user ? (
        <CreateTask></CreateTask>
      ) : (
        <div className='text-center text-3xl font-semibold mt-7'>
          <h1>You are not logged in. So, Please Be login to add Your todo</h1>
        </div>
      )}
      <Tasks></Tasks>
    </div>
  );
};

export default Home;
