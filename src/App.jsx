import './App.scss'
import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'


function App() {

  const location = useLocation()


  return (
    <>
     <Toaster position='top-center'></Toaster>
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='Contact' element={<Contact />}/>
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App
