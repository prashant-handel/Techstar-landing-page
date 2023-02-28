import React from "react";
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechStar</h1>
        <p>© 2010 TechStar. All rights reserved.</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/@techstarsglobal" target="_blank">
            YouTube
          </a>
          <a href="https://www.instagram.com/prashant_handel/" target="_blank">
            Instagram
          </a>
          <a href="https://github.com/prashant-handel" target="_blank">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
