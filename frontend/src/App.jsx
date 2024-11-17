import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/homemodules/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login'
import AdminHome from './components/admin/AdminHome';
import CarouselImages from './components/admin/CarouselImages';
import ResearchProjects from './components/admin/ResearchProj';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/AdminHome' element={<AdminHome />}></Route>
        <Route path='/CarouselImages' element={<CarouselImages />}></Route>
        <Route path='/resProj' element={<ResearchProjects />}></Route>
      </Routes>
    </>
  )
}

export default App
