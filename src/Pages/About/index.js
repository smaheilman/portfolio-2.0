import React from "react";

function About() {
  return (
    <section className="About-Container">
      <div className="About-Wrapper">
        <h1 className="About-Header">Who am I?</h1>
        <p className="About-Text">
          Hi! My name is Samantha Heilman and I am a web developer. I grew up on
          a farm in northeastern Ohio near Cleveland and still live in the same
          area. I spend my free time playing games with friends, walking my dog,
          and working on projects around the house. I originally went to school
          and studied biology and chemistry and worked in the food production
          industry. I am passionate about developing sites that are user
          friendly and accesible.
        </p>
      </div>
      <img
        className="About-Image"
        width="25%"
        src={require(`../../assets/Sam.jpg`)}
        alt="me"
      ></img>
    </section>
  );
}

export default About;
