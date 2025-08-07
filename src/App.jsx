import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import Services from './pages/Services'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Donate from './pages/Donate'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import ProgramsHealth from './pages/ProgramHealth'
import ProgramsFarming from './pages/ProgramFarming'
import ProgramsEducation from './pages/ProgramEducation'
import PageTransitionWrapper from './components/PageTransition'
import SuccessPage from './pages/SuccessPage'
import CancelPage from './pages/CancelPage'


function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
      <PageTransitionWrapper />
        <Navbar />
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/programs/health' element={<ProgramsHealth />} />
          <Route path='/programs/farming' element={<ProgramsFarming />} />
          <Route path='/programs/education' element={<ProgramsEducation />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/cancel' element={<CancelPage />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
