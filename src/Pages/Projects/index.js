import React, { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      name: "Budget Buddy",
      path: "budget-buddy-screenshot.jpg",
      link: "https://infinite-sea-98511.herokuapp.com/",
      github: "https://github.com/smaheilman/Budget-buddy",
      description: "A app to help with monthly budgeting!",
      tech: "javascript, html, css, Node, Handlebars, express, heroku",
    },
    {
      name: "Movie Genator",
      path: "Movie-generator-screenshot.jpg",
      link: "https://benrowen5.github.io/What-Should-I-Watch/",
      github: "https://github.com/Benrowen5/What-Should-I-Watch",
      description:
        "An app to help you decide what movie to watch tonight based on rating, genre and viewer score",
      tech: "javascript, html, css, thrid party apis",
    },
    {
      name: "Daily Schedule",
      path: "schedule-app-screenshot.jpg",
      link: "https://smaheilman.github.io/challenge-5/",
      github: "https://github.com/smaheilman/challenge-5",
      description: "Used to create a daily schedule.",
      tech: "javascript, html, css",
    },
    {
      name: "Weather App",
      path: "weather-app-screenshot.jpg",
      link: "https://smaheilman.github.io/weather-dashboard-challenge-6/",
      github: "https://github.com/smaheilman/weather-dashboard-challenge-6",
      description:
        "Recieves the weather for the week for whatever location you search for.",
      tech: "javascript, html, css, thrid party apis",
    },
    {
      name: "Coding Quiz",
      path: "quiz-screenshot.jpg",
      link: "https://smaheilman.github.io/challenge-4-os/",
      github: "https://github.com/smaheilman/challenge-4-os",
      description:
        "A website to test you coding skills, quizing you on basic coding questions.",
      tech: "javascript, html, css",
    },
    {
      name: "Budget Tracker",
      path: "budget-tracker-screenshot.jpg",
      link: "https://peaceful-savannah-76507.herokuapp.com/ ",
      github: "https://github.com/smaheilman/budget-tracker",
      description:
        "Used to help keep track of a budget visualizing income and outgoing expenseses.",
      tech: "javascript, html, css, mongodb, mongoose, heroku, node",
    },
  ]);

  return (
    <div className="Projects-Container ">
      <div className="Projects-Header">
        <h1 className="Projects-Heading">Projects</h1>
        <span className="Resume">
          <a
            className="Resume-Link"
            href={require(`../../assets/SamanthaHeilmanResume.pdf`)}
          >
            <img
              src={require(`../../assets/resume.png`)}
              alt="Resume-Icon"
            ></img>
            Resume
          </a>
        </span>
      </div>
      <div className="Projects-Wrapper">
        <div className="Projects-Sub-Wrapper">
          {projects.map((image) => (
            <div className="Projects-Image-Wrapper" tabindex="0">
              <img
                className="Projects-Image"
                src={require(`../../assets/${image.path}`)}
                alt={image.name}
                key={image.name}
              />
              <div className="Projects-Image-Description">
                <h3 className="Projects-Name">{image.name}</h3>
                <p className="Projects-Description">{image.description}</p>
                <div className="Projects-Links-Wrapper">
                  <a className="Projects-Link" href={image.link} tabindex="0">
                    Link!
                  </a>
                  <a
                    className="Projects-Github"
                    href={image.github}
                    tabindex="0"
                  >
                    <img
                      src={require(`../../assets/github.png`)}
                      alt="github icon"
                    ></img>
                  </a>
                </div>
                <p className="Projects-Tech">Technology Used: {image.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
