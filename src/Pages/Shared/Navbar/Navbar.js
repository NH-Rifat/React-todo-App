import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class='navbar bg-base-100'>
      <div class='flex-1'>
        <a class='btn btn-ghost normal-case text-xl'>Todo App</a>
      </div>
      <div class='flex-none'>
        <ul class='menu menu-horizontal p-0'>
          <li>
            <a>Home</a>
          </li>
          
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;