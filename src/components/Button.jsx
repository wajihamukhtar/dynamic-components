import React from 'react'

const Button = (props) => {
    const { text } = props
    return (
        text &&
        <button {...props} >{text || ''}</button>
    )
}

export default Button;
