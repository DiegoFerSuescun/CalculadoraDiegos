import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {
  
  useNavigate
  return (
    
     <div>
        <Routes>
          <Route  path='/' element = {<Landing />} />  
          <Route  path='/home' element = {<Landing />} />  

        </Routes>        
     </div>   

  )
}

export default App
