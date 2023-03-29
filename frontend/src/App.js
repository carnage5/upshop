import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import logo from './logo.svg';
import Search from './search';
import Signup from './signup';

function App() {
  return (
    <div >
      <h1>tst</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
