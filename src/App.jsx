import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Calc from './components/Calc/Calc';
import RegisterUs from './components/Register/RegisterUser';
import { AuthProvider } from './components/Context/authContext';

function App() {
  
  useNavigate
  return (
    <AuthProvider>
     <div>
        <Routes>
          <Route  path='/' element = {<Landing />} />  
          <Route  path='/calculadora' element = {<Calc />} />  
          <Route  path='/reg' element = {<RegisterUs />} />  
        </Routes>        
     </div>   
    </AuthProvider>
  )
}

export default App
