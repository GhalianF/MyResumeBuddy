import './App.css';

import React, { useState } from 'react';

import Navbar from './Navbar';
import TextBoxComponentOne from './TextBoxComponentOne';
import TextBoxComponentTwo from './TextBoxComponentTwo';
import Feedback from './Feedback';
import TextInputWithDisplay from './TextInputWithDisplay';

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap';


function passTextToAPI(element) {

}


function writeToFeedBack() {

}
function App() {


  return (
    <div className="Container col-lg-12" class = "App">
      <Navbar />
    <div className="row">

      <div class='col-md-6 section1 p-2  justify-content-center align-items-center'>
        <div class='row p-2'>
          <div class = 'd-flex col-md-12 justify-content-center align-items-center'> 
        <TextBoxComponentOne />
        </div>
        </div>
       
      </div>

      <div class='col-md-6 section1 p-2  justify-content-center align-items-center'>
        <div class='row p-2'>
          <div class = ' d-flex col-md-12 justify-content-center align-items-center'> 
        <TextBoxComponentTwo />
       
        </div>
        </div>
        
      </div>
  </div>
  <div className='d-flex justify-content-center align-items-center'>
  <div className = 'justify-content-center align-items-center'>
    <div>
      
      
      </div>
    </div>
  </div>

      <div class = 'row p-2 text-light' >
        <div class = 'p-2 d-flex  justify-content-center align-items-center'>
        <header>

        <h1>Welcome to ResumeBuddy!</h1>
        <p>Your ultimate companion on the journey to crafting the perfect resume.</p>
    </header>
    <main>
        <section>
            <h2>What We Offer:</h2>
            <ul>
                <li>
                    <strong>Resume Review and Tips: </strong>
                    Simply paste your resume into our smart editor, and receive instant feedback and actionable tips.
                </li>
                <li>
                    <strong>PDF Resume Upload: </strong>
                    Upload your resume file, and our tool will review it just as effectively as a text version.
                </li>
                <li>
                    <strong>ATS Keyword Optimization: </strong>
                    Enhance your resume's chances of making it through ATS filters with our keyword optimization tool.
                </li>
            </ul>
        </section>
        <section>
            <h2>Why Choose ResumeBuddy?</h2>
            <ul>
                <li><strong>User-Friendly:</strong> Our platform is designed to be intuitive and easy to navigate.</li>
                <li><strong>Insightful Feedback:</strong> Get real and effective improvements for your resume’s quality and effectiveness.</li>
                <li><strong>ATS-Friendly:</strong> Stay updated on the latest ATS trends and requirements.</li>
            </ul>
        </section>
        <footer>
            <p>Start your journey to a more powerful resume today with ResumeBuddy—where your dream job is just a resume away!</p>
        </footer>
    </main>
        </div>
      </div>
      
    </div>
  );
}

export default App;