import { useState } from 'react'
import MyButton from '../button'
import ProjectCard from '../projectCard'
import './projectsPage.css'
import Header from '../header'
import Projects from '../../data/projectCardData'

function ProjectsPage() {
    const [software, toggleSoftware] = useState(false)
    const [ai, toggleAi] = useState(false)
    const [frontend, toggleFrontend] = useState(false)
    const [biology, toggleBiology] = useState(false)
    
    let projectList = []
    for (let i = 0; i < Projects.length; i += 3) {
        const p1 = Projects[i]
        const p2 = Projects[i + 1]
        const p3 = Projects[i + 2]

        projectList.push(
            <div className='projectRowBox'>
                <ProjectCard title={p2.title} img={p2.img} type={p2.type} desc={p2.desc} skills={p2.skills}/>
                <ProjectCard title={p1.title} img={p1.img} type={p1.type} desc={p1.desc} skills={p1.skills}/>
                <ProjectCard title={p3.title} img={p3.img} type={p3.type} desc={p3.desc} skills={p3.skills}/>
            </div>
        )
    }

    return(
        <>
        <Header title={'Projects'}/>
        <div className='projects'>
            <div className='filterBox'>
                <MyButton text={'Software'} width={'130px'}  onClick={() => toggleSoftware(software? false : true)}/>
                <MyButton text={'Frontend'} width={'130px'}/>
                <MyButton text={'Backend'} width={'130px'}/>
                <MyButton text={'AI / ML'} width={'130px'}/>
                <MyButton text={'Biology'} width={'130px'}/>
            </div>
            <div>
                {software}
                {projectList}
            </div>
        </div>
        </>
    )
}

export default ProjectsPage