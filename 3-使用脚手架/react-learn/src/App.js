import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
const duration = 700;

let a = 0;
function App() {
  const [inProp, setInProp] = useState(true);
  return (
    <div>
      <Transition
        in={inProp}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
        appear={true}
        addEndListener={(node, done) => {
          console.log(node, done);
          done();
          node.addEventListener("transitionend", done, false);
        }}
      >
        {state => {
          a++;
          console.log(a);
          console.log(state);
          return (
            <div
              className={state}
              //   style={{
              //     ...defaultStyle,
              //     ...transitionStyles[state]
              //   }}
            >
              I'm a fade Transition!，{a}
              <h1 className={state}></h1>
            </div>
          );
        }}
      </Transition>
      <button
        onClick={() => {
          setInProp(!inProp);
        }}
      >
        Click to Enter
      </button>
    </div>
  );
}
export default App;
