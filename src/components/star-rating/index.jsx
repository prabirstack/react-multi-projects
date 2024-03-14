import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'
// onClick={} onMouseMove={} onMouseLeave={}
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)
  }
  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex)
    setHover(rating)
  }

  return (
    <div className='wrapper'>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            size={30}
            onClick={() => {
              handleClick(index)
            }}
            onMouseMove={() => {
              handleMouseEnter(index)
            }}
            onMouseLeave={() => {
              handleMouseLeave(index)
            }}
            className={index <= (hover || rating) ? 'active' : ''}
          />
        )
      })}
    </div>
  )
}
