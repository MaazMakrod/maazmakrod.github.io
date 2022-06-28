import './Projects.css';
import './Cards.css';
import blogger from '../images/blogger.png';
import adDatabase from '../images/AdDatabase.png'
import forest from '../images/forest.png'
import resume from '../images/resume.png';
import quakebot from '../images/quakebot.png'

const Projects = () => {
    return (
        <diV id='projects' className='parallax2'>
            <div class="card-container">

                <div class="card projtitle" data-aos="fade-left">
                    <h1>PROJECTS</h1>
                </div>

                <div class="card moveDown" data-aos="fade-right">
                    <div class="card-header">
                    <img src={blogger} alt="blogger" />
                    </div>
                    <div class="card-body">
                    <span class="tag tag-teal">MERN, Redux, Material UI</span>
                    <h4>
                        Blogging Application
                    </h4>
                    <p>
                        A fullstack blogging application that allows users to <b>comment on, like, edit, and create blogs</b>. This application was created using React and Material UI for the frontend and Node, Express, and MongoDB for the backend. To manage the state I employed Redux principles.
                    </p>
                    <p>
                        I am particularly fond of this project because it is my <b>first fullstack application</b>. All the other web projects that I have built have been either purely frontend or purely backend, however, this was the first time that I put all of my knowledge together to develop an application!
                    </p>
                    <p>
                        While working on this project I also learned about deployment, as a result, I have the application deployed <b>live using Heroku</b>. Please take a look using the links below!
                    </p>
                    <div class="user">
                        <div className='card-button card-button-teal'><a href='https://radiant-beyond-88397.herokuapp.com/' target='_blank'>See it Live</a></div>
                        <div className='card-button card-button-teal'><a href='https://github.com/MaazMakrod/Blog-Application' target='_blank'>See the Code</a></div>
                    </div>
                    </div>
                </div>

                <div class="card moveUp" data-aos="fade-left">
                    <div class="card-header">
                    <img src={adDatabase} alt="ads" />
                    </div>
                    <div class="card-body">
                    <span class="tag tag-purple">Django, Bootstrap, MySQL, GitHub OAuth</span>
                    <h4>
                        Ads Database
                    </h4>
                    <p>
                        A fullstack application that allows uaer to <b>create, comment on, and edit blogs</b>. This application was made using Bootstrap and Django templates for the frontend and the Django REST framework and MySQL for the backend.
                    </p>
                    <p>
                        What I found particularly interesting while building this application was implementing <b>GitHub OAuth</b> to allow a user to login. This took some time reading Django's and GitHub's documentation, however it was so worthwhile! Additionally, users are also able to upload images to their ad.
                    </p>
                    <p>
                        Although this application is not hosted online, you can checkout a video demo below!
                    </p>
                    <div class="user">
                        <div className='card-button card-button-purple'><a href='https://youtu.be/HfWgQYkrxOo' target='_blank'>Video Demo</a></div>
                        <div className='card-button card-button-purple'><a href='https://github.com/MaazMakrod/djangoProjects' target='_blank'>See the Code</a></div>
                    </div>
                    </div>
                </div>

                <div class="card moveDown" data-aos="fade-right">
                    <div class="card-header">
                    <img src={forest} alt="forest" />
                    </div>
                    <div class="card-body">
                    <span class="tag tag-pink">Java</span>
                    <h4>
                        Forest Life Simulation GUI
                    </h4>
                    <p>
                        A Java application that <b>simulates forest life by managing interactions between lifeforms</b>. This was creates using Object Oriented Programming, concepts like polymorphism, interfaces, and classes, and data structures like arrays and arraylists.
                    </p>
                    <p>
                        This was the first major program which I built that allows a user to interact with a visual interface, so it will always be memorable. One of my most favorite parts of building this project was watching lifeforms of the same species cluster together. This made me feel that the simulation algorithm implemented was realistic!
                    </p>
                    <p>
                        Check the video demo below!
                    </p>
                    <div class="user">
                        <div className='card-button card-button-pink'><a href='https://youtu.be/1Y6e3xpf9pk' target='_blank'>Video Demo</a></div>
                        <div className='card-button card-button-pink'><a href='https://github.com/MaazMakrod/ForestLifeSimulationGUI' target='_blank'>See the Code</a></div>
                    </div>
                    </div>
                </div>

                <div class="card moveUp" data-aos="fade-left">
                    <div class="card-header">
                    <img src={resume} alt="resume" />
                    </div>
                    <div class="card-body">
                    <span class="tag tag-teal">PHP, HTML, jQuery, Bootstrap, SQLite</span>
                    <h4>
                        Resume Registry Database
                    </h4>
                    <p>
                        An application that allows users to <b>enter, edit, and delete information related to their education and employment history</b>. This was created using HTML and Bootstrap for the frontend and PHP and MySQL for the backend.
                    </p>
                    <p>
                        What I found most compelling about creating this project was handling HTML and SQL injection from the user when using PHP. Additionally, I use jQuery to dynamically update the DOM for the user making things like selecting schools much easier.
                    </p>
                    <p>
                        Check out the video demo below!
                    </p>
                    <div class="user">
                    <div className='card-button card-button-teal'><a href='https://youtu.be/5rMioKjM61I' target='_blank'>Video Demo</a></div>
                        <div className='card-button card-button-teal'><a href='https://github.com/MaazMakrod/ResumeRegistry' target='_blank'>See the Code</a></div>
                    </div>
                    </div>
                </div>

                <div class="card moveDown" data-aos="fade-right">
                    <div class="card-header">
                    <img src={quakebot} alt="city" />
                    </div>
                    <div class="card-body">
                    <span class="tag tag-purple">Python, BeautifulSoup4, Discord API</span>
                    <h4>
                        Quake Bot
                    </h4>
                    <p>
                        This is a Python Discord bot that <b>webscrapes recent earthquake information around the world from Volcano Discovery</b>. This was made using the Discord API to create the bot and Python to process the data.
                    </p>
                    <p>
                        That I found most interesting about this project was finding patterns in Volcano Discovery's HTML so that we could accurately webscrape information from the website. Additionally, having real time communication between a user and the bot was also interesting to see.
                    </p>
                    <p>
                        Check out the video demo below!
                    </p>
                    <div class="user">
                    <div className='card-button card-button-purple'><a href='https://youtu.be/oTecA1g4i6U' target='_blank'>Video Demo</a></div>
                        <div className='card-button card-button-purple'><a href='https://github.com/MaazMakrod/Discord-Earthquake-Bot' target='_blank'>See the Code</a></div>
                    </div>
                    </div>
                </div>
                
                <div class="projLink moveDown" data-aos="zoom-in" data-aos-duration="3000">
                    <a href='https://github.com/maazmakrod' target='_blank' style={{ textDecoration: 'none' }}>See More Projects on my GitHub</a>
                </div>

            </div>
        </diV>

    );
}

export default Projects;