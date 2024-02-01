import React from 'react'
import './toknow.css'
import azstatic from '../../assects/azStatic.png'
import json from '../../assects/json.png'

const Toknow = () => {
  return (
    <div className='Updates'>
      <div className="Az-Card">
        <div className="img-container">
          <img src={azstatic} alt="azImg" />
        </div>
        <div className="card-content">
         <div className="card-title">
           <h3>Azure Static Web App </h3>
         </div>
          <div className="card-body">
          <p>I just wanted to let you know that this website is currently being hosted on Azure 
          as a Static Web App. The website files are pulled in from a Github repository. 
          To achieve this, I followed Microsoft's documentation to fix some of the issues that 
          occurred during the CI/CD process, as I was trying to get the website published. 
          If you are interested, this is one of the failed commits on Github: 
           <a href="https://github.com/aonayinka/portfolio/actions/runs/7358252159/workflow">https://github.com/aonayinka/<br/>portfolio/actions/runs/7358252159/
           workflow.</a></p>
          </div>
          
        </div>
       
        {/* <div className="butn">
          <button>
            <a>
              View More
            </a>
          </button>
        </div> */}
      </div>

      <div className="Az-Card">
        <div className="img-container">
          <img src={json} alt="azImg" />
        </div>
        <div className="card-content">
         <div className="card-title">
           <h3>Search Bar </h3>
         </div>
          <div className="card-body">
          <p>I am currently working on fixing the search bar. 
          Clients should be able to search for keywords on my resume, 
          which is stored as a JSON file. However, I am experiencing issues 
          with displaying the search results correctly.</p>
          </div>
          
        </div>
       
        {/* <div className="butn">
          <button>
            <a>
              View More
            </a>
          </button>
        </div> */}
      </div>

      <div className="Az-Card">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">Loading...</div>
      </div>
     
     
        {/* <div className="img-container">
          <img src={azstatic} alt="azImg" />
        </div>
        <div className="card-content">
         <div className="card-title">
           <h3>Azure Static Web App </h3>
         </div>
          <div className="card-body">
          <p>I just wanted to let you know that this website is currently being hosted on Azure 
          as a Static Web App. The website files are pulled in from a Github repository. 
          To achieve this, I followed Microsoft's documentation to fix some of the issues that 
          occurred during the CI/CD process, as I was trying to get the website published. 
          If you are interested, this is one of the failed commits on Github: 
           <a href="https://github.com/aonayinka/portfolio/actions/runs/7358252159/workflow">
            https://github.com/aonayinka/<br/>portfolio/actions/runs/7358252159/
           workflow.</a></p>
          </div>
          
        </div> */}
       
        {/* <div className="butn">
          <button>
            <a>
              View More
            </a>
          </button>
        </div> */}
      </div>

     
    
      
    
      
    </div>
  )
}

export default Toknow


// my website is currently hosted on azure has a Static Web App the files pulled in form a Github repository. i followed a few Microsoft documenting to fix 
// some of the  ci/cd fails when trying to get the website published (https://github.com/aonayinka/portfolio/actions/runs/7358252159/workflow).
