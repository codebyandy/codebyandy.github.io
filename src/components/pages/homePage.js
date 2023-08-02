// import ProjectCard from '../projectCard'
// import ProjectCard2 from '../projectCard2'
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
            {/* <div className='bioBox'>   
                <div>
                    I'm an aspiring developer, currently exploring <span style={{color: '#335381', 'font-weight': 'bold'}}> software engineering and machine learning. </span> 
                    I've worked with <span style={{color: '#335381', 'font-weight': 'bold'}}> React, HTML, CSS, Python, R, C++, Jupyter Notebooks, TensorFlow, and PyTorch. </span>
                    I come from 4 years of experience in biology research, including in ecology and evolution.
                    I'm curious about the use of artificial intelligence and other technologies for conservation science.
                </div>
                <div>
                    ✨ <span style={{color: '#335381', 'font-weight': 'bold'}}>  Seeking a software engineering internship for summer 2023. </span>
                </div>
            </div> */}
            <div className='heading'>Research — Machine Learning</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            <div className='projGallery'>
                <div className='project'>
                    <img className='projImg' src={ require('../../img/thumbnails/crisp.jpg')} />
                    <div className='projTxt'> 
                        <div className='projTitle'>From CLIP to CRISP: Contrastive Remote Sensing-Image Pretraining using Weakly Labeled Data</div>
                        <div className='projAuthors'>Andy V. Huynh, Rohan Sikand, Jael Lopez-Saucedo, Claire Tang, Lauren Gillespie</div>
                        <div className='projDesc'>CS 197 Computer Science Research Project</div>
                        <div className='projLinks'>Paper | Presentation</div>
                    </div>
                </div>
                <div className='project'>
                    <div className='projImg'></div>
                    <div className='projTxt'> 
                        <div className='projTitle'>Exploring Unsupervised Methods for Acoustic Bat Species Classification and Individual Identification</div>
                        <div className='projAuthors'>Andy V. Huynh, Andreas Paepcke</div>
                        <div className='projDesc'>CS 191W Writing-Intensive Independent Study</div>
                        <div className='projLinks'>Paper | Presentation</div>
                    </div>
                </div>
            </div>
            <div className='heading' style={{marginTop: "50px"}}>Research — Biology</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            <div className='projGallery'>
                <div className='project'>
                    <img className='projImg'/>
                    <div className='projTxt'> 
                        <div className='projTitle'>Adaptive tracking in response to insecticide pressure in Drosophila</div>
                        <div className='projAuthors'>Andy V. Huynh, Marianthi Karageorgi, Mark C. Bitter, Caitlynn To-Duyen Tran, Dmitri A. Petrov</div>
                        <div className='projDesc'>Petrov Lab, Dept. of Biology, Stanford Univeristy</div>
                        <div className='projLinks'>Poster</div>
                    </div>
                </div>
                <div className='project'>
                    <div className='projImg'></div>
                    <div className='projTxt'> 
                        <div className='projTitle'>How Climate Drives Mosquito-Borne Diseases in Queensland</div>
                        <div className='projAuthors'>Andy Huynh, Lisa Couper, Eloise Skinner, Erin Mordecai</div>
                        <div className='projDesc'>Mordecai Lab, Dept. of Biology, Stanford Univeristy</div>
                        <div className='projLinks'>Poster</div>
                    </div>
                </div>
                <div className='project'>
                    <div className='projImg'></div>
                    <div className='projTxt'> 
                        <div className='projTitle'>Mechanisms of Action of Synthetic Inhibitors of Insulin Secretion</div>
                        <div className='projAuthors'>Andy V. Huynh, Rohan Sikand, Jael Lopez-Saucedo, Claire Tang, Lauren Gillespie</div>
                        <div className='projDesc'>CS 197 Computer Science Research Project</div>
                        <div className='projLinks'>Paper | Presentation | Code</div>
                    </div>
                </div>
            </div>
            <div className='heading' style={{marginTop: "50px"}}>Other Activities</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            </div>

        </>
    )
}

export default HomePage

{/* <ProjectCard2 /> */}
{/* <div className='projectRowHeading'>Software Engineering</div>
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
</div> */}
{/* </div> */}
{/* <Link className='link' to='/projects'>
<MyButton text={'Check out more projects'} height={'60px'} width={'500px'}/>
</Link>  */}