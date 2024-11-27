import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");

  // Child se data lene ke liye callback function
  const handleChildData = (childMessage) => {
    setMessage(childMessage); // Parent ka state update
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      <button onClick={() => setMessage("Message updated by Parent!")}>
        Update Message in Parent
      </button>
      <Child message={message} onChildData={handleChildData} />
    </div>
  );
}

export default Parent;
