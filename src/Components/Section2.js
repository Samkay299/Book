import React, {useState} from 'react'
import tab1 from '../images/tab1.svg'
import More from './More'

const Section2 = () => {
    const [state, setState] = useState(false)

  return (
    <div>
        <section id='intro2'>
           <div className="container-lg">
              <div className="row justify-content-center align-items-center">

              <div class="col-md-5 text-center mt-4 d-md-block ">
            <img style={{width:'100%'}} src={tab1} alt="" />
               </div>

               <div class="col-md-5 text-center text-md-start mx-5 mt-5">
            <h1>
                <div class="display-5">Bookmark in one click</div>
            </h1>
            <p>Organize your bookmarks however you like. Our single drag-and-drop interface gives you complete control over how you manage your favourite sites</p>

            {state && <More/>}
            <div className="container">
            <button onClick={() => setState(!state)}>{state? 'Less Info' : 'More Info'}</button>
            </div>
            
         </div>

              </div>

           </div>
        </section>
    </div>
  )
}

export default Section2
