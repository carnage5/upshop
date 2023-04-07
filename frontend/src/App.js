import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import logo from './logo.svg';
import Search from './search';
import Signup from './signup';
import Details from './details';
import Navbar from './navbar';
import Cart from './cart';

function App() {
  return (
    <div >      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/search/:product' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
