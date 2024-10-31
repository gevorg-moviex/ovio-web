import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Section from './Components/Section/section';
import Loading from './Components/Loading/loading';
import Home from './Pages/home';
import RegisterPage from './Pages/registerPage';
import LoginPage from './Pages/loginPage';
import HelpPage from './Pages/helpPage';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {loading ? 
          <Loading />  
        : 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/section" element={<Section />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes> 
        }
    </>
  );
}

export default App;
