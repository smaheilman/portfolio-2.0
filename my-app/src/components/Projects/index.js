import React, { useState } from "react";

function Projects() {
    const [projects] = useState([
        {
            name: 'Budget Buddy',
            path: 'budget-buddy-screenshot.jpg',
            link: 'https://infinite-sea-98511.herokuapp.com/',
            github: 'https://github.com/smaheilman/Budget-buddy',
            description: 'A app to help with monthly budgeting!',
            tech: 'javascript, html, css, Node, Handlebars, express, heroku'
        },
        {
            name: 'Movie Genator',
            path: 'Movie-generator-screenshot.jpg',
            link: 'https://benrowen5.github.io/What-Should-I-Watch/',
            github: 'https://github.com/Benrowen5/What-Should-I-Watch',
            description: 'An app to help you decide what movie to watch tonight based on rating, genre and viewer score',
            tech: 'javascript, html, css, thrid party apis'
        },
        {
            name: 'Daily Schedule',
            path: 'schedule-app-screenshot.jpg',
            link: 'https://smaheilman.github.io/challenge-5/',
            github: 'https://github.com/smaheilman/challenge-5',
            description: 'Used to create a daily schedule.',
            tech: 'javascript, html, css'
        },
        {
            name: 'Weather App',
            path: 'weather-app-screenshot.jpg',
            link: 'https://smaheilman.github.io/weather-dashboard-challenge-6/',
            github: 'https://github.com/smaheilman/weather-dashboard-challenge-6',
            description: 'Recieves the weather for the week for whatever location you search for.',
            tech: 'javascript, html, css, thrid party apis'
        },
        {
            name: 'Coding Quiz',
            path: 'quiz-screenshot.jpg',
            link: 'https://smaheilman.github.io/challenge-4-os/',
            github: 'https://github.com/smaheilman/challenge-4-os',
            description: 'A website to test you coding skills, quizing you on basic coding questions.',
            tech: 'javascript, html, css'
        },
        {
            name: 'Budget Tracker',
            path: 'budget-tracker-screenshot.jpg',
            link: 'https://peaceful-savannah-76507.herokuapp.com/ ',
            github: 'https://github.com/smaheilman/budget-tracker',
            description: 'Used to help keep track of a budget visualizing income and outgoing expenseses.',
            tech: 'javascript, html, css, mongodb, mongoose, heroku, node'
        }
    ])

    return (
        <div className="projects container ">
            <h2 className="proh">
                Projects
                <span className="resume">
                    <a className='resLink' href={require(`../../assets/SamHeilmanResume (1).pdf`)}>
                        <img src={require(`../../assets/icons/resume.png`)} alt='resume icon'></img>
                        Resume
                    </a>
                </span>
            </h2>
            <div className="d-inline-flex justify-content-around">
                <div className="flex-column">
                {projects.map((image) => (
                    <div className="img__wrap col-6  mx-auto">
                        <img className="work card-block img__img" src={require(`../../assets/screenshots/${image.path}`)}
                            alt={image.name}
                            key={image.name}
                        />
                        <div className="img__description">
                            <h3 className="h3img">{image.name}</h3>
                            <p className="pimg">{image.description}</p>
                            <a className="imglink" href={image.link}>Link!</a>
                            <a className="github" href={image.github}>
                                <img src={require(`../../assets/icons/github.png`)} alt='github icon'></img>
                            </a>
                            <p>
                                Technology Used: {image.tech}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )

}

export default Projects;