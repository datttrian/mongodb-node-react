import { useState, useEffect } from "react";
import Header from "./Header";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log({ counter });
    }, 1000);
    console.log("Rendering App");

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  //   useEffect(() => {
  //     console.log("...");
  //   }, [counter]);

  return (
    <div className="container">
      <Header message="Naming Contests" />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default App;
