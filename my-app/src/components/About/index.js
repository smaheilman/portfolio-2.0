import React from 'react';

function About() {
    return (
        <section className='about' >
            <div className='aboutMe d-flex justify-content-center'>
                <div class="me flex-column col-4">
                    <h1 id="about" className='p-2'>Who am I?</h1>
                    <p className='p-2'>Hi! My name is Samantha Heilman and I am a web developer. I grew up on a farm in northeastern Ohio near Cleveland and still live in the same area. I originally went to school and studied biology and chemistry and worked in the food production industry, but have recently decided to change career paths for web development!</p>
                </div>
                <img className='imgMe' width='25%' src={require(`../../assets/img/Sam.jpg`)} alt="me"></img>
            </div>
        </section>
    );
}

export default About;