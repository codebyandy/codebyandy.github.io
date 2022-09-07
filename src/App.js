import NavBar from './components/navBar';
import Header from './components/header';
import HomePage from './components/pages/homePage';
import ProjectsPage from './components/pages/projectsPage';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <ProjectsPage/> 
      <Footer/>
    </div>
  )
}

export default App
