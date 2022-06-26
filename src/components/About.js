import './About.css'
import apollo from '../images/apollo.png'
import threejs from '../images/threejs.png'
import mapbox from '../images/mapbox.png'
import resume from '../images/MaazMakrodResume.pdf'

const languages = [
    'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white',
    'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white',
    'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
    'https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white',
    'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
    'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
];

const tools = [
    'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
    'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
    'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white',
    'https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white',
    'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
    apollo

]

const technolgies = [
    'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
    'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white',
    'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white',
    'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
    'https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white',
    'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
    threejs,
    mapbox
]

const About = () => {
    return (
        <diV id='about' className='parallax3'>
            <div className = 'aTitle'>ABOUT ME</div> 

            <div className='aboutContent' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='leftDiv'>
                    Hi there, I'm Maaz, a computer engineering student at the University of Toronto!

                    <br/><br/>

                    I decided to study computer engineering because I was interested in both the software and hardware aspects of computers. Although I do still find them both interesting, I have found a greater passion in building software. As a result, in my free time you can often find me learning about different aspects of software, like full stack development, different searching and sorting algorithms, and just about how to be a good developer in general.

                    <br/><br/>

                    Beyond learning about software, I have a passion for playing sports like ice hockey or soccer, going to the gym, and going on walks thorugh different trails. Although it's cliché to say, I also enjoy reading a good book. One of my favorites is Behind Closed Doors by B.A. Paris.

                    <br/><br/>

                    Right now I am just beginning my career and my interests lie in particularly fullstack web development, however, I still have a lot of time to grow, so who knows where I will end up!

                    <br/><br/>

                    Thank you for visiting my website, and feel free to check out the links below!

                    <br/><br/>

                    <div class="center">
                        <div id="social-test">
                            <ul class="social">
                                <li><a href = "https://github.com/maazmakrod" target='_blank'><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href = "https://www.linkedin.com/in/maaz-makrod/" target='_blank'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href = "mailto:maaz.makrod@gmail.com" target='_blank'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                <li><a href ={resume} target='_blank'><i class="fa fa-file" aria-hidden="true"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='rightDiv'>
                    <h3>Technical Skills</h3>
                    <br/>

                    <h5>Languages</h5>
                    <hr style={{marginBottom: '1%'}}/>

                    {
                        languages.map(l => {
                                                return (
                                                        <img src={l} style={{margin: '1%'}}></img>
                                                );
                                            }
                                    )
                    }

                    <br/><br/>

                    <h5 style={{marginTop: '2%'}}>Tools</h5>
                    <hr style={{marginBottom: '1%'}}/>

                    {
                        tools.map(t => {
                                                return (
                                                        <img src={t} style={{margin: '1%', maxHeight: '28px'}}></img>
                                                );
                                            }
                                    )
                    }

                    <br/><br/>

                    <h5 style={{marginTop: '2%'}}>Technologies</h5>
                    <hr style={{marginBottom: '1%'}}/>

                    {
                        technolgies.map(t => {
                                                return (
                                                        <img src={t} style={{margin: '1%', maxHeight: '28px'}}></img>
                                                );
                                            }
                                    )
                    }

                </div>
            </div>
        </diV>

    );
}

export default About;