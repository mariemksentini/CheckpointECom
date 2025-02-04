import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/LogIn';
import Profil from './Components/Profil';

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Profil' element={<Profil/>}/>
    </Routes>
    </>
  );
}

export default App;
