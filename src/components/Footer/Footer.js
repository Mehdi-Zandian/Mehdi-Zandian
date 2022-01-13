import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// animation
import Zoom from "react-reveal/Zoom";
// UI
import { BsInstagram, BsGithub } from "react-icons/bs";
import { HiArrowCircleUp } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer w-100">
      <div className="footer__body w-100 d-flex flex-column justify-content-center text-center">
        <Zoom cascade>
          <div className="footer__bodyLinks">
            <a
              title="My Github Account"
              href="https://github.com/Mehdi-Zandian"
            >
              <BsGithub />
            </a>
            <a
              title="My Instagram Account"
              href="https://www.instagram.com/_mehdizandi/"
            >
              <BsInstagram />
            </a>
            <a title="My Telegram Account" href="https://t.me/MehdiZandi">
              <FaTelegramPlane />
            </a>
          </div>
        </Zoom>
        <small className="text-muted mb-5">{`© ${new Date().getFullYear()} Mahdi Zandian`}</small>
        <div className="mb-4">
          <Link
            title="Back To Top"
            className="text-decoration-none text-white shadow"
            to="/#header"
          >
            <HiArrowCircleUp className="text-center display-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
