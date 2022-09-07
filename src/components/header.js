import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className ='infoBox'>
                <img className='profileImg' src={ require('../img/profile.jpg') } />
                <div className='infoBoxRight'>
                    <div>
                        <div className='textName'>Hello there, I'm Andy!</div>
                        <div className='textSlogan'>I'm discovering software and biology.</div>
                    </div>
                    <div>
                        <div className='textRole'>🧬 Evolution Research Intern @ The Petrov Lab</div>
                        <div className='textRole'>💻 Computer Science Student @ Stanford University</div>
                    </div>
                    <div className='socialBox'>
                        <img className='socialIcon' src={require('../img/linkedin.png')}/>
                        <img className='socialIcon' src={require('../img/github.png')}/>
                        <img className='socialIcon' src={require('../img/email.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header