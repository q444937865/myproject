import React, { useState } from "react";

function Example({ num }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(num);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default Example;
