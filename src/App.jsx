import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Calc from './components/Calc/Calc'

function App() {
  
  useNavigate
  return (
    
     <div>
        <Routes>
          <Route  path='/' element = {<Landing />} />  
          <Route  path='/calculadora' element = {<Calc />} />  
        </Routes>        
     </div>   

  )
}

export default App
