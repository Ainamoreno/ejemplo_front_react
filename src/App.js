import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';
import Movies from './containers/Movies/Movies';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
