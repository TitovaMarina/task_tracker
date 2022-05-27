import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthUser } from './globals/AuthUser';
import Home from './pages/home';
import Login from "./pages/login";
import Register from './pages/register';

function App() {
  return (
    <AuthUser>
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </AuthUser>
  );
}

export default App;
