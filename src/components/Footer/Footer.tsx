import Heading from "../heading"
import "./Footer.css"
import { FaFacebookF, FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter  } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-about">
          <Heading heading="" subheading="About us"></Heading>
          <p>IEEE MACE SB is a non profit organization working for the upliftment of students and profeesionals.</p>
          <div className="icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h1>Contact Us</h1>
          <p><a href="#"><FaWhatsapp /> <span>Name1</span></a></p>
          <p><a href="#"><FaWhatsapp /><span>Name2</span></a></p>
          <p className="email"><a href="">Email: hack24@mail.com</a></p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2024 &copy; .hack24. All Rights Reserved.</p>
        <p>Designed and Developed By .hack24 WebTeam</p>
      </div>
    </div>
  )
}

export default Footer
