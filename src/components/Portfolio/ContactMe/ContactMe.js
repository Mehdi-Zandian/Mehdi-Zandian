import React from "react";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./ContactMe.scss";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function ContactMe() {
  return (
    <div className="contact container">
      <div className="mb-5">
        <Fade bottom cascade>
          <div className="d-flex flex-column justify-content-center">
            <div className="contact__header justify-content-center d-flex align-items-center">
              Get In Touch
              <span className="ms-2"></span>
            </div>
            <h5 className="mt-3 fw-bold text-center">Contact Me</h5>
            <p className="text-center">
              I am available to bring your ideas to life,
              <br /> I am just a click away.
            </p>
          </div>
        </Fade>

        <div className="contact__body mt-3">
          <div className="d-flex justify-content-between mb-4">
            <div className="contact__bodyItem d-flex align-items-center">
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <MdLocationPin className="fs-3 text-dark" />
              </div>
              <span>Iran, Tehran</span>
            </div>
            <div className="contact__bodyItem d-flex align-items-center">
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <MdEmail className="fs-3 text-dark" />
              </div>
              <a href="mailto:mahdizandi81@gmail.com">mahdizandi81@gmail.com</a>
            </div>
            <div className="contact__bodyItem d-flex align-items-center">
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <BsWhatsapp className="fs-3 text-dark" />
              </div>
              <a href="tel:09374676477">09374676477</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ContactMe);
