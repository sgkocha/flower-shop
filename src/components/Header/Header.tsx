import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Header.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '976px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0
};

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const [sign, setSign] = React.useState(true)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <header className="header d-f jc-sb align-center">
      <div><img src="images/logo.png" alt="logo" /></div>
      <nav>
        <ul className="header-nav-list d-f align-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="shop">Shop</Link></li>
          <li><a href="">Blog</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
      <div className="header-controls d-f">
        <div>
          <button onClick={handleOpen}><img src="images/user.png" alt="user" /></button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="sign-content d-f">
                <div className='sign-info' style={sign ? {height: "632px"} : {height: "673px"}}>
                  <div className="sign-caption d-f jc-sb align-center">
                    <h3 className="sign-title">{sign ? "Login" : "Register"}</h3>
                    <Link to='/'>Back to Home</Link>
                  </div>
                  <h4 className="sign-subtitle"> {sign ? "Login and have more fun" : "Register and help us help you"} </h4>
                  <form action="" className="sign-fm">
                    {!sign ? <input type="email" name='email' placeholder='Email' /> : <div className='d-n'></div>}
                    <input type="text" name='userName' placeholder='Username' />
                    <input type="password" name="password" placeholder='Password' />
                    {
                      sign ?
                        <div className="check-bl d-f">
                          <input type="checkbox" name="remember" id="remember" />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        :
                        <div className="sign-note">
                          with registering your accepting our <a href="terms"></a> and <a href="">privacy policy</a>
                        </div>
                    }
                    <button> {sign ? "Login" : "Register"}</button>
                  </form>
                  <div className="register-bl d-f">
                    <div className="register-bl-title">{sign ? "Dont have an account?" : "Already have an account?"} </div>
                    {
                      sign ? <button className='register-bl-btn' onClick={() => setSign(false)}>Register</button>
                        : <button className='register-bl-btn' onClick={() => setSign(true)}>Login</button>
                    }
                  </div>
                </div>
                <div><img src={sign ? "images/login.png" : "images/register.png"} alt="login/register" /></div>
              </div>
            </Box>
          </Modal>
        </div>
        <button><img src="images/cart.png" alt="cart" /></button>
      </div>
    </header >
  )
}

export default Header