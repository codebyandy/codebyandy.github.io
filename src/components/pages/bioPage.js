import './bioPage.css'
import Header from '../header'
import ProjectCard from '../projectCard'
import Projects from '../../data/projectCardData'

function BioPage() {
    const p1 = Projects[7]
    const p2 = Projects[6]
    const p3 = Projects[8]

    return(
        <>
            <Header title={'Bio'}/>
            <div className='main'>
                <div className='bio'> 
                    <img className='img' src={require('../../img/bio_profile.jpg')} />
                    <div className='text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div className='projectRowHeading'>Other things I'm up to...</div>
                <div className='projectRowBox'>
                    <ProjectCard title={p2.title} img={p2.img} type={p2.type} desc={p2.desc} skills={p2.skills}/>
                    <ProjectCard title={p1.title} img={p1.img} type={p1.type} desc={p1.desc} skills={p1.skills}/>
                    <ProjectCard title={p3.title} img={p3.img} type={p3.type} desc={p3.desc} skills={p3.skills}/>
                </div>
            </div>
        </>
    )
}

export default BioPage