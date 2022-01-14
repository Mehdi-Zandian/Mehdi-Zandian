import React from "react";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./ContactMe.scss";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function ContactMe() {
  return (
    <div id="contact" className="contact container">
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

        <Fade bottom cascade>
          <div className="contact__body mt-3 mb-4 d-flex flex-column flex-md-row justify-content-md-between gap-3">
            <div
              title="Where I Live"
              className="contact__bodyItem d-flex align-items-center"
            >
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <MdLocationPin className="fs-3 text-dark" />
              </div>
              <span>Iran, Tehran</span>
            </div>
            <div
              title="My Email Address"
              className="contact__bodyItem d-flex align-items-center"
            >
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <MdEmail className="fs-3 text-dark" />
              </div>
              <a
                style={{ fontSize: "15px" }}
                href="mailto:zandianmehdi33@gmail.com"
              >
                zandianmehdi33@gmail.com
              </a>
            </div>
            <div
              title="My WhatsApp Number"
              className="contact__bodyItem d-flex align-items-center"
            >
              <div className="contact__ItemIcon rounded-circle p-3 me-4">
                <BsWhatsapp className="fs-3 text-dark" />
              </div>
              <a href="tel:09374676477">09374676477</a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default React.memo(ContactMe);
