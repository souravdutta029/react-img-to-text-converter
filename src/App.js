import React from "react";
import Tesseract from "tesseract.js";
import "./App.css";

Tesseract.recognize(
  "https://tesseract.projectnaptha.com/img/eng_bw.png",
  "eng",
  { logger: (m) => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
});

function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
