import React, { useState} from 'react';

function Child({ message, onChildData }) {
  const [childMessage, setChildMessage] = useState("");

  const sendDataToParent = () => {
    onChildData(childMessage); // Parent ko data bhejna
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
      <h2>Child Component</h2>
      <p>Message from Parent: {message}</p>
      <input
        type="text"
        placeholder="Type a message for Parent"
        value={childMessage}
        onChange={(e) => setChildMessage(e.target.value)}
      />
      <button onClick={sendDataToParent}>Send to Parent</button>
    </div>
  );
}

export default Child;
