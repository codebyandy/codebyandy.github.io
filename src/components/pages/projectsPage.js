import { useState } from 'react'
import ProjectCard from '../projectCard'
import './projectsPage.css'

function ProjectsPage() {
    const [software, toggleSoftware] = useState(false)
    const [ai, toggleAi] = useState(false)
    const [frontend, toggleFrontend] = useState(false)
    const [biology, toggleBiology] = useState(false)
    
    return(
        <div>
            <div>Software</div>
            <div>Frontend</div>
            <div>AI / ML</div>
            <div>Biology</div>
        </div>
    )
}

export default ProjectsPage