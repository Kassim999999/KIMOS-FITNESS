import "../../../css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="container footer-grid">

        {/* Brand */}

        <div className="footer-brand">

          <h2>KIMOS FITNESS</h2>

          <p>
            Train Hard. Stay Strong. Become the best version of yourself with
            professional coaching, modern equipment and an inspiring community.
          </p>

          <div className="socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/about">About</a></li>

            <li><a href="/memberships">Memberships</a></li>

            <li><a href="/classes">Classes</a></li>

            <li><a href="/gallery">Gallery</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3>Contact</h3>

          <ul>

            <li>
              <FaMapMarkerAlt />
              <span> Great wall phase 1, Beijing Road, Nairobi</span>
            </li>

            <li>
              <FaPhoneAlt />
              <span>+254 113 979766</span>
            </li>

            <li>
              <FaEnvelope />
              <span>info@kimosfitness.co.ke</span>
            </li>

          </ul>

        </div>

        {/* Opening Hours */}

        <div>

          <h3>Opening Hours</h3>

          <ul>

            <li>
              <FaClock />
              <span>Mon – Fri: 5:00 AM – 9:00 PM</span>
            </li>

            <li>
              <FaClock />
              <span>Saturday: 5:00 AM – 2:00 PM</span>
            </li>

            <li>
              <FaClock />
              <span>Sunday: Closed</span>
            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} KIMOS Fitness. All Rights Reserved.
        </p>

        {/* <p>
          Designed & Developed by <strong>Kassim Dev</strong>
        </p> */}

      </div>

    </footer>
  );
}

export default Footer;