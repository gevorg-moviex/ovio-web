import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // Importing Routes
import Header from './Components/Header/header';
import Section from './Components/Section/section';
import HelpLayout from './Layouts/HelpLayout';
import Loading from './Components/Loading/loading';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {loading ? 
          <Loading />  
        :
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/section" element={<Section />} />
          <Route path="/help" element={<HelpLayout />} />
        </Routes> 
      }
    </>
  );
}

export default App;
