import React from "react";
// UI
import "./ContactMe.scss";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function ContactMe() {
  return (
    <div id="contact" className="contact container">
      <div className="mb-5">
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

        <div className="contact__body mt-3 mb-4 d-flex flex-column flex-md-row justify-content-md-between">
          <div
            title="Where I Live"
            className="contact__bodyItem d-flex align-items-center mb-3"
          >
            <div className="contact__ItemIcon rounded-circle p-3 me-4">
              <MdLocationPin className="fs-3 text-dark" />
            </div>
            <span>Tehran, Iran</span>
          </div>
          <div
            title="My Email Address"
            className="contact__bodyItem d-flex align-items-center mb-3"
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
            className="contact__bodyItem d-flex align-items-center mb-3"
          >
            <div className="contact__ItemIcon rounded-circle p-3 me-4">
              <BsWhatsapp className="fs-3 text-dark" />
            </div>
            <a href="tel:09374676477">09370472747</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ContactMe);
