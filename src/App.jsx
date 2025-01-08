import './App.scss'
import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
function App() {

  const location = useLocation()


  return (
    <>
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App
