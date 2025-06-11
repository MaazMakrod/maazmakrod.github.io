import { Outlet, useLocation, useMatch } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { File, Github, Linkedin, Mail, Transcript } from "../icons";
import resume from "../assets/Maaz_Makrod_Resume.pdf";
import transcript from "../assets/Maaz_Makrod_Official_Transcript.pdf";
import { APP_BASE } from "../utils/constants";

const NAVIGATION_LINKS = [
  {
    text: "Home",
    url: APP_BASE,
  },
  {
    text: "Experience",
    url: `${APP_BASE}experience`,
  },
  {
    text: "Projects",
    url: `${APP_BASE}projects`,
  },
  {
    text: "About",
    url: `${APP_BASE}about`,
  },
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
    url: resume,
  },
  {
    svg: Transcript,
    url: transcript,
  },
];

function Layout() {
  const activeLink = {
    [NAVIGATION_LINKS[0].text]: useMatch((NAVIGATION_LINKS[0].url).replace('#', '/')),
    [NAVIGATION_LINKS[1].text]: useMatch((NAVIGATION_LINKS[1].url).replace('#', '/')),
    [NAVIGATION_LINKS[2].text]: useMatch((NAVIGATION_LINKS[2].url).replace('#', '/')),
    [NAVIGATION_LINKS[3].text]: useMatch((NAVIGATION_LINKS[3].url).replace('#', '/')),
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Navigation links={NAVIGATION_LINKS} activeLink={activeLink} />
      <Outlet />
      <Footer links={FOOTER_LINKS} />
    </>
  );
}

export default Layout;
