import React, { useState } from "react";

function Projects() {
    const [projects] = useState([
        {
            name: 'Budget Buddy',
            description: 'A app to help with monthly budgeting!'
        },
        {
            name: 'Coding Quiz',
            description: 'A website to test you coding skills, quizing you on basic coding questions.'
        },
        {
            name: 'Movie Genator',
            description: 'An app to help you decide what movie to watch tonight based on rating, genre and viewer score'
        },
        {
            name: 'Daily Schedule',
            description: 'Used to create a daily schedule.'
        },
        {
            name: 'Weather App',
            description: 'Recieves the weather for the week for whatever location you search for.'
        },
        {
            name: 'Budget Tracker',
            description: 'Keeps track of you incoming and out going expenses.'
        }
    ])

    return (
        <div>
            <ul>
                <li>
                    <a href="https://infinite-sea-98511.herokuapp.com/">
                    <img src='../../assets/screenshots/budget-buddy-screenshot.png'
                        alt='Budget Buddy' />
                    </a>
                </li>
                <li>
                    <a href="https://benrowen5.github.io/What-Should-I-Watch/">
                        <img src='../../assets/screenshots/Movie-generator-screenshot.png'
                            alt='Movie Generator' />
                    </a>
                </li>
                <li>
                    <a href="https://smaheilman.github.io/challenge-4-os/">
                        <img src='../../assets/screenshots/quiz-screenshot.png'
                            alt='Quiz' />
                    </a>
                </li>
                <li>
                    <a href="https://smaheilman.github.io/weather-dashboard-challenge-6/">
                        <img src='../../assets/screenshots/weather-app-screenshot.png'
                            alt='Weather app' />
                    </a>
                </li>
                <li>
                    <a href="https://smaheilman.github.io/challenge-5/">
                        <img src='../../assets/screenshots/schedule-app-screenshot.png'
                            alt='Daily Schedule App'/>
                    </a>
                </li>
                <li>
                    <a href="https://peaceful-savannah-76507.herokuapp.com/">
                        <img src='../../assets/screenshots/budget-tracker-screenshot.png'
                            alt='Budget Tracker'/>
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Projects;