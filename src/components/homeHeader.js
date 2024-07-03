import './homeHeader.css'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
function Header() {
    return (
        <div className='header'>
            <div className ='infoBox'>
                <img className='profileImg' src={ require('../img/profile.jpeg')} />
                <div className='infoBoxRight'>
                    {/* <div className='infoBoxRightText'> */}
                    <div className='textName'>Hello there, I'm Andy!</div>
                    <div className='workPlease'>👉 Seeking full-time roles in machine learning</div>
                    <div style={{ paddingTop: '10px'}}>I'm a new grad MS CS student, specializing in AI, with research experience in machine learning for sustainability.</div>
                    <div style={{ paddingTop: '10px'}}>
                        <Link className='socialButton' to='#' onClick={() => {window.open('https://koningslab.stanford.edu/')}}>
                            <div className='textRole'>🌱 Graduate Researcher @ Stanford Doerr School of Sustainability</div>
                        </Link>
                        <Link className='socialButton' to='#' onClick={() => {window.open('https://cs.stanford.edu/')}}>
                            <div className='textRole'>💻 MS & BS Computer Science @ Stanford University</div>
                        </Link>
                        <div className='socialBox'>
                            <Link className='socialButton' to='#' onClick={() => {window.open('https://www.linkedin.com/in/andyviethuynh/', '_blank')}}>
                                <FaLinkedin size={20} />
                            </Link>
                            <Link className='socialButton' to='#' onClick={() => {window.open('https://x.com/andyvhuynh', '_blank')}}>
                                <FaTwitter size={20} />
                            </Link>
                            <Link className='socialButton' to='#' onClick={() => {window.location.href = 'mailto:avhuynh@stanford.edu'}}>
                                <FaEnvelope size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header