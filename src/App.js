import NavBar from './components/navBar';
import Header from './components/header';
import './App.css';
import ProjectCard from './components/projectCard';

function App() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <div className="featured">
            <h2>Featured Projects</h2>
            <div className="projectbox">
                <div style={{'padding-top': '20px', 'padding-bottom': '20px', 'font-size': '20px'}}>Software Engineering</div>
                <div className="projectboxinner">
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                </div>
                <div style={{'padding-top': '20px', 'padding-bottom': '20px','font-size': '20px'}}>Biology Research</div>
                <div className="projectboxinner">
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                </div>
            </div>
        </div>
      </div>        
  );
}

export default App;
