import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile'
import Top from './Components/Top';
import Art from './Pages/Art';
import NotFoundPage from './Pages/NotFoundPage';
import Painting from './Pages/Painting';
import Projects from './Pages/Projects';
import Snaps from './Pages/Snaps';
import Sports from './Pages/Sports';
import SportsAchievements from './Pages/SportsAchievements';
import UiUx from './Pages/UiUx';
import UiAthletez from './Pages/UiAthletez';
import UxAthletez from './Pages/UxAthletez';
import Redesign from './Pages/Redesign';
import AthletezDashboard from './Pages/AthletezDashboard';
import QuebecDashboard from './Pages/QuebecDashboard';


function App() {
  
  return (
    <>
      <Top />
      <BrowserRouter>
      <Routes>
          
          <Route index path='/' element={<Profile />}/>
          <Route path='/painting' element={<Painting/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/achievements' element={<SportsAchievements/>}/>
          <Route path='/snaps' element={<Snaps/>}/>
          <Route path='/uiux' element={<UiUx/>}/>
          <Route path='/uiathletez' element={<UiAthletez/>}/>
          <Route path='/uxathletez' element={<UxAthletez/>}/>
          <Route path='/redesign' element={<Redesign/>}/>
          <Route path='/atheletezdashboard' element={<AthletezDashboard/>}/>
          <Route path='/quebecdashboard' element={<QuebecDashboard/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='*' component={NotFoundPage}/>
        </Routes>
      </BrowserRouter>
   </>
  ); 
}

export default App;
