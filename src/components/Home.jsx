import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all Tech Problems !</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We provide solutions to the tech problems you face every day. We are
            a leading tech company with the aim of increasing problem-solving
            abilities in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Welcome to <b>TechStar</b>, where innovation meets technology. We're
            a team of passionate professionals who are committed to using
            cutting-edge technology to solve complex problems and make the world
            a better place. Our mission is to create transformative solutions
            that enable businesses and individuals to thrive in a rapidly
            evolving digital landscape. We believe that technology should be
            accessible to everyone, and we're dedicated to developing products
            and services that are intuitive, secure, and affordable. At the
            heart of our company is a commitment to excellence and a passion for
            innovation. Our team of designers, developers, and product managers
            are among the best and brightest in the industry, and we're
            constantly pushing ourselves to stay at the forefront of emerging
            technologies and trends.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>            
            </div>

            <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>            
            </div>

            <div style={{animationDelay: "0.7s"}}>
                <AiFillYoutube/>
                <p>YouTube</p>            
            </div>

            <div style={{animationDelay: "1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>     
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
