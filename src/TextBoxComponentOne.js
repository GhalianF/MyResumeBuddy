import { useState } from 'react'
import './App.css'
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"



const API_KEY = process.env.REACT_APP_API_KEY;; // secure -> environment variable


function TextBoxComponentTwo() {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState(""); // "Negative" or "Positive"
  var inputText;
  function CopyToClipboard(element){
    navigator.clipboard.writeText(sentiment);
    element.innerText = "Copied!";
    setTimeout(() => {
        element.innerText = "Copy to Clipboard";
    }, 3000);
    console.log(inputText);
  }
  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");

    // For 0-10
    // What is the sentiment of this tweet with a value between 0 and 10 (10 being its very positive)? 

        const APIBody = {
            "model": "gpt-3.5-turbo-instruct",
            "prompt": "Give resume tips and feedback in bullet points from the following text: " + tweet,
            "temperature": 0,
            "max_tokens": 140,
            "top_p": 1.0,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0
          }
    

    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(APIBody)
    }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setSentiment(data.choices[0].text.trim()); // Positive or negative
      });
    }
  
    console.log(tweet);
    return (
      <div className="SectionTwo">
        <div>
          <textarea
            onChange={(e) => setTweet(e.target.value)}
            placeholder='Paste your resume here'
            style={{
                width: '38rem',   // Makes the input take the full container width
                height: '25rem',  // Sets a specific height
                fontSize: '24px', // Bigger text inside the input
                padding: '10px', // Adds padding inside the input
               // margin: '5px',
                border: '5px solid #zzz',
                borderRadius: '4px'
              }}
          />
        </div>
        <div >
          <Button className = 'btn btn-light m-2' onClick={callOpenAIAPI}>Give resume tips</Button>
          <Button className='btn btn-light m-2' onClick={(e) => CopyToClipboard(e.target)}>Copy tips to Clipboard</Button>

          {sentiment !== "" ?
            <h3>{sentiment}</h3>  
            :
            <h3> Resume tips will be shown here</h3>
          }
        </div>
      </div>
    )
  }

  export default TextBoxComponentTwo