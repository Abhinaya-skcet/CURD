import ReactDom from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './Router/Signin';
import Login from './Router/Login';
import Home from './Router/Home';
const Navigate =()=>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin />}/>
    <Route path='Login' element={<Login />}/>
    <Route path='Home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default Navigate