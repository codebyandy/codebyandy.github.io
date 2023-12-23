import './footer.css'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

function Footer() {
    return (
        // <div className='footer'>CodeByAndy 2022. Site designed and built by me. 😊</div>
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
    )
}

export default Footer