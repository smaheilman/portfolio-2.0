import React, { useEffect, useState } from "react";

function Homepage() {
  return (
    <div className="Home-Container">
      <div className="Home-Wrapper">
        <div className="Home-Circle"></div>
        <div className="Home-Inner-Wrapper">
          <h1 className="Home-Heading">Hello!</h1>
          <p className="Home-Text">
            My name is Samantha and I am a web developer from Ohio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
