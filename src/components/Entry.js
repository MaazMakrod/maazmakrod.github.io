import './Entry.css';
import { useEffect } from 'react';

const Entry = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // useEffect(() => {
    //     let gifChoices = ['https://cdn.wallpapersafari.com/68/31/dfGZyW.gif', 'https://acegif.com/wp-content/gifs/starfall-gif-51.gif', 'https://media.newyorker.com/photos/61e883ef0996b216027f9a37/master/pass/titlescreen_dusk_animated.gif', 'https://1.bp.blogspot.com/-4vf9OVikxC8/XFUltIbso7I/AAAAAAAABz0/JVXPiIhLnbA3tfwA29H1pqJlbXvX39fEwCKgBGAs/w0/snow-mountainer-night-sky-stars-scenery-31-4K.jpg'];

    //     document.getElementById('parallax').style.backgroundImage = `url(${gifChoices[getRandomInt(gifChoices.length)]})`;
    // })

    return (
        <div id='parallax' className="parallax">
            <div className='testDiv' data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear">
                <span className='enterText'>Hi there, I'm Maaz!</span>

                <div class="scrollContainer">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <span class="text">Scroll Down</span>
                </div>
            </div>

            <div className='testDiv'>
                <span data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Welcome to my website!</span>
                <span data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ marginTop: '10%' }}>I'm a ......</span>
            </div>
            
            <div className='testDiv'>
                <span data-aos="zoom-out-up" style={{ margin: "2.5%", position: 'relative', right: '20%'}}>software developer,</span>
                <span data-aos="zoom-out-right" style={{ margin: "2.5%", position: 'relative', left: '20%'}}>future engineer,</span> 
                <span data-aos="zoom-out-left" style={{ margin: "2.5%", position: 'relative', right: '20%'}}>avid book reader,</span>
                <span data-aos="zoom-out-down" style={{ margin: "2.5%", position: 'relative', left: '20%'}}>and problem solver.</span>
            </div>

            <div className='testDiv' data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
                Learn more about my projects and experiences below!
            </div>
        </div>
    )
}

export default Entry;