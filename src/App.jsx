import './App.scss'
import './App.css'

import { Route, Routes, useLocation, Router } from 'react-router-dom'
import Loader from './components/Loader';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useEffect, useState } from 'react';


function App() {

  const location = useLocation()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
     <Loader isLoading={loading} />

    {!loading && (

      <div>
        <Toaster position='top-center'></Toaster>
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
        </Route>


      </Routes>
      </div>
      
    )}

      
    </>
  )
}

export default App
