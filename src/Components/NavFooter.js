import React from 'react'
import logo1 from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

const NavFooter = () => {
  return (
    <div id='footernav'>
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-8 col-lg-4 col-xl-3">
                <img src={logo1} alt="" />
                </div>

                <div className="col-sm-8 col-lg-4 col-xl-3">
                   <nav className='nav'>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                   </nav>
                </div>

                <div className="col-sm-8 col-lg-4 col-xl-3">
                 <div className="icon">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                    </div>
                </div>

                
           
            </div>
        </div>
    </div>
  )
}

export default NavFooter