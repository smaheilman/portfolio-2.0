import React from 'react';

function About() {
    return (
        <section className='container' >
            <div className='aboutMe row mx-auto'>
                <h1 id="about" className=''>Who am I?</h1>
                <p className='col-6'>Hi! My name is Samantha Heilman and I am a web developer. I grew up on a farm in northeastern Ohio with near Cleveland and still live in the same town. I originally went to school and studied biology and chemistry but have recently decided to change career paths for web development!</p>
                <img className='col-6 imgMe' src={require(`../../assets/img/Sam.jpg`)} alt="me"></img>
            </div>
        </section>
    );
}

export default About;