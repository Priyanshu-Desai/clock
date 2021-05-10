import React from "react";

function App() {
  setInterval(updateTime, 1000);
  let timeNow = new Date().toLocaleTimeString();
  const [currentTime, showTime] = React.useState(timeNow);

  function updateTime() {
    let time = new Date().toLocaleTimeString();
    showTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
