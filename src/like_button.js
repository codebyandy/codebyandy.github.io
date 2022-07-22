// import './styles.css'
// import solar from './solar.jpg'

// 'use strict';

class LikeButton extends React.Component {
  render() {
    return (
      <div className="projectcard">
        <div className="projecttype">Machine Learning</div>
        {/* <img src={solar} alt=""/> */}
          <div className="projectdesc">
            <h2>Solar Digital</h2>
            <p>Course Project (CS230: Deep Learning)</p>
            <p>Roles: Applied Machine Learning Engineer</p>
            <p>Skills: TensorFlow, AWS, Jupyter Notebooks, Git, Python</p>
            <p>Built a image classification and segmentation model using ResNet-30 for solar panel detection from satellite imagery.</p>
        </div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);