import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import LoggedIn from './components/LoggedIn';
import LoginError from './components/LoginError';
import Login from './components/Login';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className='bg-gray-800 text-white'>
      <header className='flex p-4 w-full bg-gray-600'>
        <nav>
          <ul className='flex'>
            <li className='mx-2'>
              <Link to="/">Home</Link>
            </li>
            <li className='mx-2'>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/loggedin" element={<LoggedIn/>}/>
          <Route path="/login-error" element={<LoginError/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
