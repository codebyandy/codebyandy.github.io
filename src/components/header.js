import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className ='headerInfo'>
                <img className='profile' src={ require('../img/profile.jpg') } />
                <div>
                    <div style={{'font-size': '30px', 'font-weight': 'bold'}}>Hello there, I'm Andy!</div>
                    <div style={{'font-style': 'italic', 'padding-bottom': '20px'}}>I'm discovering software and biology.</div>
                    <div>Evolution Research Intern @ The Petrov Lab</div>
                    <div>Computer Science Student @ Stanford University</div>
                </div>
            </div>
        </div>
    )
}

export default Header