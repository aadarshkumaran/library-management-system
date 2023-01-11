import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/adminDashboard';
import AdminLogin from './components/adminLogin';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import UserPortal from './components/userPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminDashboard/>}/>
          <Route path='/user/*' element={<UserPortal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
