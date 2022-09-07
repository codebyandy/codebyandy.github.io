import './projectCard.css'

function ProjectCard() {
    return (
        <div className="projectcard">
            <div className="projecttype">Machine Learning</div>
            <img className="projectimg" src={require('../img/Test2.jpg')}/>
            <div className="projectdesc">
                <h2 style={{margin: '0%'}}>Solar Digital</h2>
                <p style={{'font-style': 'italic'}}>Course Project (CS230: Deep Learning)</p>
                <p>Built a image classification and segmentation model using ResNet-30 for solar panel detection from satellite imagery.</p>
                {/* <p style={{'margin-top': '15px'}}>TensorFlow, Keras, Jupyter Notebooks, Git</p> */}
            </div>
        </div>
    )
}

export default ProjectCard