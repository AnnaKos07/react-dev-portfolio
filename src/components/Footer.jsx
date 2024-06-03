import socials from "../content/socials";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2024. Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/anna-kostrytsa0705/">Hanna Kastrytsa</a>.
      </p>
      <div className="hero-socials">
              {socials.map((social, index) => (
                <a className="social-link" target="_blank" key={index} href={social.url}>
                  {social.icon}
                </a>
              ))}
            </div>
    </footer>
  );
};
export default Footer;
