import socials from "../content/socials";

const ContactForm = () => {
  return (
    <div className="contact-section">

        <div className="hero-socials">
              {socials.map((social, index) => (
                <a className="social-link" target="_blank" key={index} href={social.url}>
                  {social.icon}
                </a>
              ))}
            </div>

      <div className="contact-info">
        <h1>Let&apos;s work together!</h1>
        <br />
        <p> I am always ready for collaboration.</p>
        <a href="mailto:hannakastrytsa@gmail.com">Send me an email 👋</a>
        <br />
        <br />
        <br />
        <p> Or if you prefer live or chat communication:</p>
        <a href="https://t.me/ann_kos">Write me on Telegram 💬</a>
      </div>
    </div>
  );
};

export default ContactForm;
