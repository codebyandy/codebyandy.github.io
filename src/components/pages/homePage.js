import ProjectCard from '../projectCard'
import './homePage.css'
import Header from '../homeHeader'

function HomePage() {
    return(
        <>
        <Header/>
        <div className='main'>
            <div className='bioBox'>   
                <div>
                    I'm an aspiring developer, currently exploring <span style={{color: '#335381', 'font-weight': 'bold'}}> software engineering and machine learning. </span> 
                    I've worked with <span style={{color: '#335381', 'font-weight': 'bold'}}> React, HTML, CSS, Python, R, C++, Jupyter Notebooks, TensorFlow, and PyTorch. </span>
                    I come from 4 years of experience in biology research, including in ecology and evolution.
                    I'm curious about the use of artificial intelligence and other technologies for conservation science.
                </div>
                <div>
                    ✨ <span style={{color: '#335381', 'font-weight': 'bold'}}>  Seeking a software engineering internship for summer 2023. </span>
                </div>
            </div>
            <div className='heading'>Featured Projects</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            <div className='projectBox'>
                <div className='projectRowHeading'>Software Engineering</div>
                <div className='projectRowBox'>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <div className='projectRowHeading'>Biology Research</div>
                <div className='projectRowBox'>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
            <div className='checkButton'>Check out more projects</div>
        </div>
        </>
    )
}

export default HomePage