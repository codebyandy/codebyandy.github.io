import './button.css'

function MyButton({text, height, width}) {
    return(
        <div style={{height: height, width: width}} className='button'>
            {text}
        </div>
    )
}

export default MyButton