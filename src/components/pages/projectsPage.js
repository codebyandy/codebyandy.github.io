import { useState } from 'react'
import MyButton from '../button'
import ProjectCard from '../projectCard'
import './projectsPage.css'
import Header from '../header'

function ProjectsPage() {
    const [software, toggleSoftware] = useState(false)
    const [ai, toggleAi] = useState(false)
    const [frontend, toggleFrontend] = useState(false)
    const [biology, toggleBiology] = useState(false)
    
    let projectList = []
    for (let i = 0; i < 12; i += 1) {
        projectList.push(
            <div className='projectRowBox'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        )
    }

    return(
        <>
        <Header/>
        <div className='projects'>
            <div className='filterBox'>
                <MyButton text={'Software'} width={'130px'}/>
                <MyButton text={'Frontend'} width={'130px'}/>
                <MyButton text={'Backend'} width={'130px'}/>
                <MyButton text={'AI / ML'} width={'130px'}/>
                <MyButton text={'Biology'} width={'130px'}/>
            </div>
            <div>
                {projectList}
            </div>
        </div>
        </>
    )
}

export default ProjectsPage