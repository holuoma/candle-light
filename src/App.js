import React, { useState, useEffect } from "react";
import "./styles.scss";

const App = () => {
  const [candleHeight, setCandleHeight] = useState(80);
  const [isCandleFinished, setIsCandleFinished] = useState(false);

  // Using setInterval within useEffect has some caveats:
  // See: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

  useEffect(() => {
    console.log("inside use effect");
    let interval = setInterval(() => {
      setCandleHeight(height => height - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  // See how this works:
  // https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3

  // Other solution:
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCandleHeight(height => height - 1);
  //   }, 200);
  //   return () => clearTimeout(timeout);
  // }, []);
  // See level 6:
  // https://medium.com/@sdolidze/the-iceberg-of-react-hooks-af0b588f43fb

  useEffect(() => {
    if (candleHeight < 10) setIsCandleFinished(true);
  }, [candleHeight]);

  const putNewCandle = () => {
    setCandleHeight(80);
    setIsCandleFinished(false);
  };

  console.log("rendering");
  return (
    <>
      <div className="block">
        <h1>The Candle</h1>
        <div>
          You're now in the dark, save for a box of candles you could salvage.
          However, those candles will burn forever; which is not likely to
          happen in the real world.
        </div>
        <br />
        <div>
          <strong>Your goal:</strong> find a way to make the candle burn to the
          end with useState and useEffect hooks in React
        </div>
        <br />
        <ul>
          <li>
            Create a state that will hold the value of the candle's height in
            your component. Set its default value to 80.
          </li>
          <li>
            The height of the candle is controlled by the candle class in the
            CSS file. Target the height value and set it to reflect your newly
            created state
          </li>
          <li>
            On the "Make candle smaller" button, attach an onClick handler that
            will diminish the height of the candle by 1 everytime it's clicked
          </li>
          <li>
            Now, being <del>lazy</del> good developers, we would like automate
            that process so we don't have to click on a button for the candle to
            become smaller. Implement a useEffect hook to take care of this. The
            candle should diminish by 1% every 2 seconds
          </li>
          <li>
            When the height of the candle reaches 10%, make sure you take it out
            so you don't burn this sandbox down! For this, you should
            conditionaly render (or not) the whole candle based on its height
          </li>
          <li>
            We don't want to be stuck in the dark, do we? Change the "Make
            candle smaller" button to "Replace with new candle", and implement a
            function that will refresh the candle to its original state
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.reactjs.org/docs/hooks-effect.html"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/dom-elements.html#style"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3"
        >
          Help
        </a>
        <div>
          <button onClick={() => putNewCandle()}>
            Replace with new candle
          </button>
        </div>
      </div>

      <div className="block candleContainer">
        {!isCandleFinished && (
          <div className="candle" style={{ height: `${candleHeight}%` }}>
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
