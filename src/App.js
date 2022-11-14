import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
