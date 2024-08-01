import React, { useState } from 'react';

function TextInputWithDisplay() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');
  // State to hold the displayed text
  const [displayedText, setDisplayedText] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    setDisplayedText(inputValue); // Update the displayed text
  };

  return (
    <div>
      {/* Input field */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
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
        <button type="submit">Display Text</button>
      </form>

      {/* Display the text entered by the user */}
      <p>Text entered: {displayedText}</p>
    </div>
  );
}

export default TextInputWithDisplay;
