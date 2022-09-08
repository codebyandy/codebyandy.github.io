import './header.css'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

function Header({title}) {
    return (
        <div className='pageHeader'>
            {title}
        </div>
        // <div className='header'>
        //     <div className ='infoBox'>
        //         <img className='profileImg' src={ require('../img/profile.jpg') } />
        //         <div className='infoBoxRight'>
        //             <div>
        //                 <div className='textName'>Hello there, I'm Andy!</div>
        //                 <div className='textSlogan'>Full-Stack Developer + Biologist</div>
        //             </div>
        //             <div>
        //                 <div className='textRole'>💻 Computer Science Student @ Stanford University</div>
        //                 <div className='textRole'>🧬 Evolution Research Intern @ The Petrov Lab</div>
        //             </div>
        //             <div className='socialBox'>
        //                 <IconContext.Provider value={{size: '30px'}}>
        //                     <AiFillGithub/>
        //                 </IconContext.Provider>
        //                 <IconContext.Provider value={{size: '30px'}}>
        //                     <AiFillLinkedin/>
        //                 </IconContext.Provider>
        //                 <IconContext.Provider value={{size: '30px'}}>
        //                     <AiFillMail/>
        //                 </IconContext.Provider>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header