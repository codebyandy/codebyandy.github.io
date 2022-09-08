import './homeHeader.css'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className ='infoBox'>
                <img className='profileImg' src={ require('../img/profile.jpg') } />
                <div className='infoBoxRight'>
                    <div>
                        <div className='textName'>Hello there, I'm Andy!</div>
                        <div className='textSlogan'>Full-Stack Developer + Biologist</div>
                    </div>
                    <div>
                        <Link className='socialButton' to='#' onClick={() => {window.open('https://cs.stanford.edu/')}}>
                            <div className='textRole'>💻 Computer Science Student @ Stanford University</div>
                        </Link>
                        <Link className='socialButton' to='#' onClick={() => {window.open('http://petrov.stanford.edu/')}}>
                            <div className='textRole'>🧬 Evolution Research Intern @ Stanford Petrov Lab</div>
                        </Link>
                    </div>
                    <div className='socialBox'>
                        <IconContext.Provider value={{size: '30px'}}>
                            <Link className='socialButton' to='#' onClick={() => {window.open('https://github.com/codebyandy')}}>
                                <AiFillGithub/>
                            </Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{size: '30px'}}>
                            <Link to='#' onClick={() => {window.open('https://www.linkedin.com/in/andyviethuynh/')}}
                            className='socialButton'>
                                <AiFillLinkedin/>
                            </Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{size: '30px'}}>
                            <Link to='#' onClick={() => {window.open('https://www.linkedin.com/in/andyviethuynh/')}}
                            className='socialButton'>
                                <AiFillMail/>
                            </Link>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header