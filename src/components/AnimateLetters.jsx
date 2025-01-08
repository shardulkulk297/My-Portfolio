import React from 'react'
import './AnimatedLetters.scss'

const AnimateLetters = ({letterClass, strArray, idx}) => {

  return (
    <span>
        {
           strArray.map((char, i)=>{
            return <span key={`${char}-${i}` } className={`${letterClass} _${i+idx}`}>
                {char}
            </span>
           })
        }
    </span>
  )
}

export default AnimateLetters
