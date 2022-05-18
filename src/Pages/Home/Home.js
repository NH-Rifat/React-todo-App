import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CreateTask from '../CreateTask/CreateTask';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Tasks from './Tasks/Tasks';

const Home = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      {
        user?<CreateTask></CreateTask>:'You are not logged in'
      }
      <Tasks></Tasks>
    </div>
  );
};

export default Home;