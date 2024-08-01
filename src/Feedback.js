import React, { useState } from 'react';

var inputText;

function TextBoxComponentOne({initialValue}) {
  // State to hold the input value
   // Define state to manage the value of the textbox
   const [value, setValue] = useState(initialValue);

   // Function to handle input change
   const handleChange = (event) => {
     setValue(event.target.value); // Update the value in state
   };
  return (
    <div>
      <input
  type="text"
  value={value}
  onChange={handleChange}
  style={{
    width: '60rem',   // Makes the input take the full container width
    height: '25rem',  // Sets a specific height
    fontSize: '24px', // Bigger text inside the input
    padding: '10px', // Adds padding inside the input
   // margin: '5px',
    border: '5px solid #zzz',
    borderRadius: '4px'
  }}
/>

    </div>
  );
}

export var inputText;
export default TextBoxComponentOne;