import { useEffect, useState } from 'react';
import {IntlProvider, FormattedMessage } from 'react-intl';
import './Experience.css';

const Accordion = () => {
    const [accordionItems, setAccordionItems] = useState([]);

    useEffect(() => {
        let accordion = [];

        data.forEach((i) => {
            accordion.push({
              title: i.title, 
              content: i.content, 
              open: i.open
            });
        });

        setAccordionItems(accordion);
    }, []);

    const handleClick = (i) => {
        const newAccordion = accordionItems.slice();
        const index = newAccordion.indexOf(i)
        
        newAccordion[index].open = !newAccordion[index].open;
        setAccordionItems(newAccordion);
    }

    return (
        <div className='accordion' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            {
                accordionItems.map((i) => (
                    <div key={accordionItems.indexOf(i)}>
                      <div 
                        className="title" 
                        onClick={() => handleClick(i)}
                      >
                       <div className="arrow-wrapper">
                         <i className={i.open 
                           ? "fa fa-angle-down fa-rotate-180" 
                           : "fa fa-angle-down"}
                         ></i>
                       </div>
                       <span className="title-text">
                         {i.title}
                       </span>
                     </div>
                     <div className={i.open 
                       ? "content content-open" 
                       : "content"}
                      >
                        <div className={i.open 
                          ? "content-text content-text-open" 
                          : "content-text"}
                        > { i.content.map(p => <p>
                                                  <FormattedMessage 
                                                      id={i.title}
                                                      defaultMessage={p} 
                                                      values={{
                                                        b: (chunks) => <b>{chunks}</b>,
                                                        agroLink: (chunks) => <a href='https://agroledger.ca/' target='_blank'>{chunks}</a>
                                                      }}
                                                  />
                                                </p>
                                                ) 
                        }
                        </div>
                      </div>
                    </div>
                ))
            }
        </div>
    );
}

const data = [
    {
    title: "Software Developer - Rocscience Inc.", 
    content: [
                `As a developer at Rocscience, I am working on 2 projects, one is adding new features for a <b>JavaScript web-based product</b> called RSLog and the other is developing the <b>company website in a LAMP environment</b>.`,
                `While working on RSLog, I have added various features using <b>external JavaScript libraries, MapBox, and Three.js</b>. Some examples of features that I have worked on are <b>exporting models to different types like DXF, STL, and JSON, creating 3D models of excavation sites using Three.js, and importing terrains from MapBox</b>. These projects have allowed for me to develop my JavaScript programming skills as I have gained ample experience in writing multiclass JavaScript files to be efficient, so that the program can be used effectively by users around the world.`,
                `While working on the company website, I have fixed various frontend and backend bugs using <b>Twig and Craft CMS</b>. Some examples of website projects that I have worked on are making Rocscience <b>articles printable, adding a feature to make articles shareable via various social media and developing registration forms for events</b>.`
            ],
    open: true
  }, {
    title: "Software Developer & QA Auditor - Canadian Sheep Federation", 
    content: [
                `At the Canadian Sheep Federation (CSF) my role began as a Software QA Auditor, where I worked on a new product called AgroLedger. AgroLedger is a <b>fullstack web-application that traces the transportation of sheep across Canada</b>. As part of my job, I developed <b>test plans, found bugs in the application, created wireframes, and created user stories</b>. Due to my hardwork and eagerness to learn, I was promoted to a Software Developer mid-internship.`,
                `As a software developer, I worked using the <b>MERN tech stack</b> and developed the front and back end of various web pages like a <b>contact us form, edit sheep form, and user account information</b>. All of this information was then generated into reports and made available to the user so that they could see their past activity. I also had a hand in building the traceability aspect of the application using <b>advanced queries and creating schemas</b>, as well as <b>communicating with the blockchain</b> using company APIs.`,
                `Learn more about the project <agroLink>here</agroLink>.`
            ],
    open: false
  },{
    title: "Fullstack Developer - UofT Freelancer's Organization (UTFO)", 
    content: [
                `As part of UTFO, I am working in a team of 5 to develop  fullstack web applications for professors and students at the University of Toronto. We primarily use the <b>MERN stack</b> and some examples of projects that I have worked on are <b>the club's website and other students' portfolios</b>.`,
                `One of the larger projects that I am working on is a code collaboration website that allows peers to code together in various programming languages. This will be made using the <b>MERN stack, web sockets, and docker</b>. As part of my duties, I am in charge of developing the <b>chat feature</b> and varying UI components of the application.`
              ],
      open: false
  },{
    title: "Tutor - Forest Hill Tutoring", 
    content: [
              `As a tutor at Forest Hill Tutoring, I taught student from grade 8 to 12 in <b>Mathematics and Java</b>. As part of my duties, I reached out to students' teachers to help their development. I also worked hard to create a welcoming atmosphere, so that students would feel comfortable asking questions.`
            ],
      open: false
  },{
    title: "Founder - Cougar Cases", 
    content: [
              `Cougar Cases was a student led organization that sold custom iphone cases to students at Marc Garneau Collegiate Institute. As the founder, I <b>led a team of 30 individuals, created detailed timelines and reports, while managing an operating budget of $50</b>. At the end of the venture, we succeeded in generating a <b>$50 profit</b>, all of which was donated to the Salvation Army.`
            ],
      open: false
  }
];

const Experience = () => {
    return (
      <IntlProvider locale={navigator.language}>
        <diV id='experience' className='parallax1'>
            <div className = 'eTitle'>EXPERIENCE</div>            
            <Accordion />
        </diV>
      </IntlProvider>
    );
}

export default Experience;