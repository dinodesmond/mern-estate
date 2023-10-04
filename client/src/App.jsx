import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import signIn from './pages/signIn';
import signUp from './pages/signUp';
import profile from './pages/profile';

export default function App() {
  return <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Home /> }/>
      <Route path='/about' element = {<About /> }/>
      <Route path='/sign-up' element = {<signUp /> }/>
      <Route path='/sign-in' element = {<signIn /> }/>
      <Route path='/profile' element = {<profile /> }/>
    </Routes>
    </BrowserRouter>
}
