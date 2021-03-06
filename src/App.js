import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';
// import RequireAuth from './Pages/Login/RequireAuth'
// import CreateTask from './Pages/CreateTask/CreateTask';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
    </div>
  );
}

export default App;

