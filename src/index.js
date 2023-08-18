import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} maxRating={10} />
      <p>The movie rating is {movieRating} </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={"5"}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={24}
      color="#af4"
      maxRating={10}
      className="test"
      defaultRating={4}
    />
    <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
