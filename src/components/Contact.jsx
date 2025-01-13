import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>

        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="mailto:sonu.mahto362000@gmail.com"
            aria-label="Send Email"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sonunmahto/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.github.com/sonunm1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://www.instagram.com/the_sonu.nm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/sonu36200/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
