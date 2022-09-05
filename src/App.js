import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile'
import Top from './Components/Top';
import Art from './Pages/Art';
import NotFoundPage from './Pages/NotFoundPage';
import Painting from './Pages/Painting';
import Snaps from './Pages/Snaps';
import Sports from './Pages/Sports';
import SportsAchievements from './Pages/SportsAchievements';


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
          <Route path='*' component={NotFoundPage}/>
        </Routes>
      </BrowserRouter>
   </>
  ); 
}

export default App;
