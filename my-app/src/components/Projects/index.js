import React, { useState } from "react";

function Projects() {
    const [projects] = useState([
        {
            name: 'Budget Buddy',
            path: 'budget-buddy-screenshot.jpg',
            link: 'https://infinite-sea-98511.herokuapp.com/',
            description: 'A app to help with monthly budgeting!'
        },
        {
            name: 'Coding Quiz',
            path: 'quiz-screenshot.jpg',
            link: 'https://smaheilman.github.io/challenge-4-os/',
            description: 'A website to test you coding skills, quizing you on basic coding questions.'
        },
        {
            name: 'Movie Genator',
            path: 'Movie-generator-screenshot.jpg',
            link: 'https://benrowen5.github.io/What-Should-I-Watch/',
            description: 'An app to help you decide what movie to watch tonight based on rating, genre and viewer score'
        },
        {
            name: 'Daily Schedule',
            path: 'schedule-app-screenshot.jpg',
            link: 'https://smaheilman.github.io/challenge-5/',
            description: 'Used to create a daily schedule.'
        },
        {
            name: 'Weather App',
            path: 'weather-app-screenshot.jpg',
            link: 'https://smaheilman.github.io/weather-dashboard-challenge-6/',
            description: 'Recieves the weather for the week for whatever location you search for.'
        },
        {
            name: 'Budget Tracker',
            path: 'budget-tracker-screenshot.jpg',
            link: 'https://peaceful-savannah-76507.herokuapp.com/',
            description: 'Keeps track of you incoming and out going expenses.'
        }
    ])

    return (
        <div>
            {projects.map((image)=> (
              <a href={image.link}>
                <img src={require(`../../assets/screenshots/${image.path}`)}
                  alt={image.name}
                  key={image.name}
                  width = '10%'
                  height= '10%'
                />
              </a>
            ))}
        </div>
    )

}

export default Projects;