import './homeHeader.css'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className ='infoBox'>
                <img className='profileImg' src={ require('../img/profile.png')} />
                <div className='infoBoxRight'>
                    <div>
                        <div className='textName'>Hello there, I'm Andy!</div>
                        <div className='textSlogan'>I'm curious about using machine learning for sustainability.</div>
                    </div>
                    <div>
                        <Link className='socialButton' to='#' onClick={() => {window.open('https://www.moisesexpositoalonso.org/')}}>
                            <div className='textRole'>🌱 Research Assistant @ Carnegie Institute for Science</div>
                        </Link>
                        <Link className='socialButton' to='#' onClick={() => {window.open('https://cs.stanford.edu/')}}>
                            <div className='textRole'>💻 M.S. & B.S. Computer Science @ Stanford University</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header