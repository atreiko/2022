import React from 'react'

const FavoriteIcon = ({ fill, onClick }) => {

  return (
    <svg 
      version="1.1" 
      id="Layer_1" 
      x="0px" 
      y="0px"
      viewBox="0 0 482.207 482.207" 
      onClick={onClick}
      width="18px"
    >
      <path 
        d="M482.207,186.973l-159.699-33.705L241.104,11.803l-81.404,141.465L0,186.973l109.388,121.134L92.094,470.404l149.01-66.6l149.01,66.6l-17.294-162.296L482.207,186.973z M241.104,370.943l-113.654,50.798l13.191-123.788l-83.433-92.393l121.807-25.707l62.09-107.9l62.09,107.9L425,205.561l-83.433,92.393l13.191,123.788L241.104,370.943z"
        stroke="#000"
        fill={fill ? '#f00' : '#fff'}
      />
    </svg>
  )
}

export default FavoriteIcon