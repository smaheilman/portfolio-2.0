import React from "react";

function About() {
  return (
    <section className="About-Container">
      <div className="About-Wrapper">
        <h1 className="About-Header">Who am I?</h1>
        <p className="About-Text">
          Hi! My name is Samantha Heilman and I am a web developer. I grew up on
          a farm in northeastern Ohio near Cleveland and still live in the same
          area. I originally went to school and studied biology and chemistry
          and worked in the food production industry, but have recently decided
          to change career paths for web development!
        </p>
      </div>
      <img
        className="About-Image"
        width="25%"
        src={require(`../../assets/img/Sam.jpg`)}
        alt="me"
      ></img>
    </section>
  );
}

export default About;
