import React from 'react'
import logo1 from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import NavFooter from './NavFooter'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <div className="container-lg">

            <div className="text-center">
                 <p>35,000+ ALREADY JOINED</p>
                  <h2>Stay up-to-date with what <br /> we're doing</h2>

                         <div className="email">
                         <button className='one'>
                           <small>example@email/com</small> <br />
                           <small className='in'>whoops, make sure it's an email</small>
                              </button>
                    
                        <button className='two'>Contact Us</button>
                         </div>
                      
            </div>


              {/* <div className="row justify-content-center align-items-center">
              <div className="col-sm-8 col-lg-4 col-xl-8">
                   <nav className='navbar'>
                      <img src={logo1} alt="" />

                      <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                      </ul>

                      <div className="img">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                      </div>

                    </nav>
                      
                </div>

              </div> */}

        </div>
    </div>
  )
}

export default Footer