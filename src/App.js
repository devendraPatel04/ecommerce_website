// import './App.css';

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;