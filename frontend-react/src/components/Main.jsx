import React from 'react'
import Button from './Button.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Main = () => {
  return (
    <>
      <div className = 'container'> 
       <div className = 'p-5 text-center bg-light-dark rounded'>
        <h1 className = 'text-light'>Stock Prediction Portal</h1>
        <p className = 'text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Button text = 'Login' class = 'btn-info'/>
       </div>
      </div>
    </>
  )
}

export default Main
