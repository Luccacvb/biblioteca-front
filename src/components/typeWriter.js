import React, { useState, useEffect } from 'react'

function TypeWriter({ children }) {
    const [text, setText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => prevIndex + 1)
        }, 80)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        setText(children.substring(0, currentIndex))
    }, [children, currentIndex])

    return <span className="typewriter typing">{text}</span>
}

export default TypeWriter