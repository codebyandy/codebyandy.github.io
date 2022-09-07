import './projectCard.css'

function ProjectCard() {
    return (
        <div className="projectCard">
            <div className='projectTop'>
                {/* <div className="projectType">Machine Learning</div> */}
                <img className="projectImg" src={require('../img/tn-placeholder.png')}/>
            </div>
            <div className="projectDesc">
                <div className='projectTitle'>Solar Digital</div>
                <div>Course Project (CS230 Deep Learning)</div>
            </div>
            <div className="projectDesc">Built a image classification and segmentation model using ResNet-30 for solar panel detection from satellite imagery.</div>
            <div className="projectDesc">TensorFlow, Keras, Jupyter Notebooks</div>
            <div className="more">
                Learn More 
            </div>
        </div>
    )
}

export default ProjectCard