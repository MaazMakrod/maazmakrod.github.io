import { Outlet, useMatch } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { File, Github, Linkedin, Mail } from "../icons";

const NAVIGATION_LINKS = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Experience',
      url: '/experience',
    },
    {
      text: 'Projects',
      url: '/projects',
    },
    {
      text: 'About',
      url: '/about',
    }
];

const FOOTER_LINKS = [
    {
      svg: Linkedin,
      url: "https://www.linkedin.com/in/maaz-makrod/",
    },
    {
      svg: Github,
      url: "https://github.com/maazmakrod",
    },
    {
      svg: Mail,
      url: "mailto:maaz.makrod@gmail.com",
    },
    {
      svg: File,
      url: "https://www.linkedin.com/in/maaz-makrod/",
    },
];

function Layout () {
    const activeLink = {
        [NAVIGATION_LINKS[0].text]: useMatch(NAVIGATION_LINKS[0].url),
        [NAVIGATION_LINKS[1].text]: useMatch(NAVIGATION_LINKS[1].url),
        [NAVIGATION_LINKS[2].text]: useMatch(NAVIGATION_LINKS[2].url),
        [NAVIGATION_LINKS[3].text]: useMatch(NAVIGATION_LINKS[3].url),
    };

    return (
        <>
            <Navigation links={NAVIGATION_LINKS} activeLink={activeLink}/>
            <Outlet />
            <Footer links={FOOTER_LINKS}/>
        </>
    )
}

export default Layout;