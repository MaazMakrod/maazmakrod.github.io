import './Footer.css'

const Footer = () => {
    return (
    <footer>
        <p class = "foot" id = "left">&#169; Maaz Makrod, { new Date().getFullYear() }</p>
        <div id = "right">
            <a href= "https://www.linkedin.com/in/maaz-makrod/" target = "_blank" class="icon"><i id = "linkedin" class="fa fa-linkedin"></i></a>
            <a href= "https://github.com/MaazMakrod" target = "_blank" class="icon"><i id = "github" class="fa fa-github"></i></a>
            <a href= "mailto:maaz.makrod@gmail.com" class="icon"><i id = "gmail" class="fa fa-envelope"></i></a>
        </div>
    </footer>
    );
}

export default Footer;