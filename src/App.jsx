import './App.scss'
import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {

  const location = useLocation()


  return (
    <>
     <Toaster position='top-center'></Toaster>
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='skills' element={<Skills />}/>
          <Route path='projects' element={<Projects />}/>
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App
