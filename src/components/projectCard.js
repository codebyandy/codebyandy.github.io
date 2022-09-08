import './projectCard.css'
import { Link } from 'react-router-dom'

function ProjectCard({title, img, type, desc, skills}) { 
    return (
        <div className="projectCard">
            <div className='projectTop'>
                {/* <div className="projectType">Machine Learning</div> */}
                <img className="projectImg" src={img}/>
            </div>
            <div className="projectDesc">
                <div className='projectTitle'>{title}</div>
                <div>{type}</div>
            </div>
            <div className="projectDesc">{desc}</div>
            <div className="projectDesc">{skills}</div>
            <Link style={{textDecoration: 'inherit'}} to='#'>
                <div className="more">
                    Learn More 
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard