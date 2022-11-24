import React from 'react'
import hero from '../images/hero.svg'

export const Section1 = () => {
  return (
    <div>
      <section id="intro">
        <div class="container-lg">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-5 text-center text-md-start">
              <h1>
                <div class="display-3">A Simple Bookmark <br /> Manager</div>
              </h1>
              <p>A clean and simple interface to organize your favourite website. Open a new browser tab and see your sites load instantly.</p>

              
                
                 <button className='pricing mx-5'><a href="#">Get it on chrome</a></button>
                
                <button className='firefox'><a class="#">Get in on firefox</a></button>    

            </div>

            <div class="col-md-5 text-center mt-4 d-md-block">
              <div className="hero">
                <img style={{ width: '100%' }} src={hero} alt="" />
              </div>
            </div>
          </div>

          <div class="text-center">
            <h2>Features</h2>
            <p class="lead text-muted">Our aim is to make it quick and easy for you to access your <br /> favourite websites. Your bookmarks sync between your devices <br /> so you can access them on the go.</p>
          </div>

          <div class="row justify-content-center align-items-center g-3 my-5">
            <div className="col-sm-8 col-lg-4 col-xl-3 f">
              <p>Simple Bookmarking</p>
              <hr />
            </div>

            <div className="col-sm-8 col-lg-4 col-xl-3 f">
              <p>Speedy Searching</p>
              <hr />
            </div>

            <div className="col-sm-8 col-lg-4 col-xl-3 f">
              <p>Easy Sharing</p>
              <hr />
            </div>


          </div>

        </div>
      </section>
    </div>
  )
}
