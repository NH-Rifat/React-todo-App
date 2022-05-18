import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Tasks from './Tasks/Tasks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Tasks></Tasks>
    </div>
  );
};

export default Home;