import {useContext} from 'react'
import Button from './Button.jsx'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx'

const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()
  
    const handleLogout = () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedIn(false)
      console.log('Logged Out')
      navigate('/login')
    }
  return (
    <>
      <nav className = 'navbar container pt-3 pd-3 align-items-start'>

        <Link className = 'navbar-brand text-light' to = "/" >Stock Prediction Portal</Link>

        <div>
          {isLoggedIn ? (
            <button className = 'btn btn-danger' onClick = {handleLogout}>LogOut</button>
          ) : (
            <>
            <Button text = 'Login' class = 'btn-outline-info' url='/login' />
            &nbsp;
            <Button text = 'Register' class = 'btn-info' url='/register' />
            </>
          )}  
        </div>
      </nav>
    </>
  )
}

export default Header
