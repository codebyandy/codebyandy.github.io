import NavBar from './components/navBar';
import Header from './components/header';
import HomePage from './components/pages/homePage';
import ProjectsPage from './components/pages/projectsPage';
import BioPage from './components/pages/bioPage';
import Footer from './components/footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/bio' element={<BioPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
