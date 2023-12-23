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
            <div className='heading'>Research</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            <div className='projGallery'>
                <div className='project'>
                    <img className='projImg' src={ require('../../img/thumbnails/crisp.png')} />
                    <div className='projTxt'> 
                        <div className='projTitle'>Contrastive ground-level image and remote sensing pre-training improves representation learning for natural world imagery</div>
                        {/* <div className='projAuthors'>Andy V. Huynh, Rohan Sikand, Jael Lopez-Saucedo, Claire Tang, Lauren Gillespie</div> */}
                        {/* <div className='projDesc'>CS 197 Computer Science Research Project</div> */}
                        <div className='projLinks'>
                            <a href="https://drive.google.com/file/d/1GdZ8Dyc8F0FxG722sBi_4crn4nHVOCIw/view" target="_blank" rel="noopener noreferrer">presentation</a>&nbsp; | &nbsp;
                            <a href="https://github.com/moiexpositoalonsolab/crisp-private" target="_blank" rel="noopener noreferrer">code</a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projImg' src={ require('../../img/thumbnails/census.png')} />
                    <div className='projTxt'> 
                        <div className='projTitle'>Exploring automated methods for drosophila census estimation + Adaptive tracking in response to insecticide pressure in Drosophila</div>
                        {/* <div className='projAuthors'>Andy V. Huynh, Andreas Paepcke</div> */}
                        {/* <div className='projDesc'>CS 191W Writing-Intensive Independent Study</div> */}
                        <div className='projLinks'>
                            <a href="https://github.com/codebyandy/drosophila-census/blob/main/meeting_slides.pdf">slides</a>&nbsp; | &nbsp; 
                            <a href="https://drive.google.com/file/d/1pJ3B66c8V80N1IAPZV-PMTDdZc2Wh5Uy/view?usp=sharing">poster</a>&nbsp; | &nbsp;
                            <a href="https://www.biorxiv.org/content/10.1101/2023.10.16.562586v1">paper</a>&nbsp; | &nbsp; 
                            <a href="https://github.com/codebyandy/drosophila-census">code</a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projImg' src={ require('../../img/thumbnails/rrv.png')} />
                    <div className='projTxt'> 
                        <div className='projTitle'>How climate drives Ross River Virus and Barmah Forest Virus in Queensland, Australia</div>
                        {/* <div className='projAuthors'>Andy V. Huynh, Andreas Paepcke</div> */}
                        {/* <div className='projDesc'>CS 191W Writing-Intensive Independent Study</div> */}
                        <div className='projLinks'>
                            <a href="https://drive.google.com/file/d/1Buq0ofCHShL4k2CRSBwBfwcFQWxJrvtV/view?usp=sharing">poster</a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projImg' src={ require('../../img/thumbnails/insulin.png')} />
                    <div className='projTxt'> 
                        <div className='projTitle'>Small molecule-mediated insulin hypersecretion induces transient ER stress response and loss of beta cell function</div>
                        {/* <div className='projAuthors'>Andy V. Huynh, Andreas Paepcke</div> */}
                        {/* <div className='projDesc'>CS 191W Writing-Intensive Independent Study</div> */}
                        <div className='multiLinks'>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/35641126/" target="_blank" rel="noopener noreferrer">paper</a>&nbsp; | &nbsp; 
                            <a href="https://drive.google.com/file/d/11Tz0xUeuYw3y4TwstQspqJlcQC_LN5zf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">poster</a>&nbsp; | &nbsp; 
                            <a href="https://drive.google.com/file/d/1e8yiKTzyp-Fjm-V5n4PcR4J4LJ4tNjsI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">presentation</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='heading' style={{marginTop: "50px"}}>Other</div>
            <div style={{width: '30%', borderTop: '2px solid #446491', marginBottom: '30px'}}></div>
            <div>
                <Link className='socialButton' to='#' onClick={() => {window.open('https://resed.stanford.edu/neighborhoods/aspen/aspen-houses/larkin')}}>
                    <div className='textRole'>🏠 Resident Assistant @ Larkin House</div>
                </Link>
                <Link className='socialButton' to='#' onClick={() => {window.open('https://jrbp.stanford.edu/')}}>
                    <div className='textRole'>🌳 Docent @ Jasper Ridge Biological Preserve</div>
                </Link>
                <Link className='socialButton' to='#' onClick={() => {window.open('https://codebyandy.github.io/portfolio')}}>
                    <div className='textRole'>📸 Wildlife photographer</div>
                </Link>
                {/* <Link className='socialButton' to='#' onClick={() => {window.open('https://www.moisesexpositoalonso.org/')}}>
                    <div className='textRole'>🗞️ (ex) Managing Editor of Photo & Video @ The Stanford Daily</div>
                </Link>
                <Link className='socialButton' to='#' onClick={() => {window.open('https://www.moisesexpositoalonso.org/')}}>
                    <div className='textRole'>📚 (ex) Education Partnerships Fellow @ The High School Support Initiative</div>
                </Link> */}
            </div>
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