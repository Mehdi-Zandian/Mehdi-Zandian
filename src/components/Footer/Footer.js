import { HashLink as Link } from "react-router-hash-link";
// UI
import { BsInstagram, BsGithub } from "react-icons/bs";
import { HiArrowCircleUp } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.scss";

function Footer({ href }) {
  return (
    <div className="footer w-100">
      <div className="footer__body w-100 d-flex flex-column justify-content-center text-center">
        <div className="footer__bodyLinks">
          <a
            target="_blank"
            title="My Github Account"
            href="https://github.com/Mehdi-Zandian"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            title="My Instagram Account"
            href="https://www.instagram.com/_mehdizandi/"
          >
            <BsInstagram />
          </a>
          <a
            target="_blank"
            title="My Telegram Account"
            href="https://t.me/MehdiZandi"
          >
            <FaTelegramPlane />
          </a>
        </div>

        <small className="text-muted mb-5">{`© ${new Date().getFullYear()} Mahdi Zandian`}</small>
        <div className="mb-4">
          <Link
            title="Back To Top"
            className="text-decoration-none text-white shadow"
            to={href}
          >
            <HiArrowCircleUp className="text-center display-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
