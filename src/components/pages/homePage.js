import ProjectCard from '../projectCard'
import './homePage.css'
import Header from '../homeHeader'
import MyButton from '../button'
import { Link } from 'react-router-dom'
import Projects from '../../data/projectCardData'

function HomePage() {
    const p1 = Projects[0]
    const p2 = Projects[1]
    const p3 = Projects[2]
    const p4 = Projects[3]
    const p5 = Projects[4]
    const p6 = Projects[5]

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
                    <ProjectCard title={p2.title} img={p2.img} type={p2.type} desc={p2.desc} skills={p2.skills}/>
                    <ProjectCard title={p1.title} img={p1.img} type={p1.type} desc={p1.desc} skills={p1.skills}/>
                    <ProjectCard title={p3.title} img={p3.img} type={p3.type} desc={p3.desc} skills={p3.skills}/>
                </div>
                <div className='projectRowHeading'>Biology Research</div>
                <div className='projectRowBox'>
                    <ProjectCard title={p4.title} img={p4.img} type={p4.type} desc={p4.desc} skills={p4.skills}/>
                    <ProjectCard title={p5.title} img={p5.img} type={p5.type} desc={p5.desc} skills={p5.skills}/>
                    <ProjectCard title={p6.title} img={p6.img} type={p6.type} desc={p6.desc} skills={p6.skills}/>
                </div>
            </div>
            <Link className='link' to='/projects'>
                <MyButton text={'Check out more projects'} height={'60px'} width={'500px'}/>
            </Link>
        </div>
        </>
    )
}

export default HomePage