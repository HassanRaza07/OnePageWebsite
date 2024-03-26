import React from "react";
import "./ContactUs.css";
import { PiAddressBookFill } from "react-icons/pi";
import { PiEnvelopeFill } from "react-icons/pi";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";

const ContactUs = () => {
  return (
    <div className="main-contact">
      <div className="left-contact">
        <h1>Get in Touch</h1>
        <p>
          Feel free to contact us for any questions or suggestions you may have.
        </p>
        <div className="info">
          <div className="phone">
            <div>
              <PiDeviceMobileSpeakerFill className="picon" />
            </div>
            <div>
              <h2>Phone</h2>
              <p>+92 55 817 1 817</p>
            </div>
          </div>
          <div className="email">
            <div>
              <PiEnvelopeFill className="eicon" />
            </div>
            <div>
              <h2>Email</h2>
              <p>infinkey@gmail.com</p>
            </div>
          </div>
          <div className="address">
            <div>
              <PiAddressBookFill className="aicon" />
            </div>
            <div>
              <h2>Address:</h2>
              <p>Neelam Block, DC Colony, Gujranwala</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-contact">
        <h1>Send us a Message</h1>
        <form>
          <label htmlFor="name">First Name:</label>
          <input type="text" id="fname" name="fname" required />
          <label htmlFor="name">Last Name:</label>
          <input type="text" id="lname" name="lname" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="email" name="phone" required />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Details:</label>
          <br></br>
          <textarea id="message" name="message" rows="8" cols="30"></textarea>
          <br />
          <br />
          <br />
          <button
            className="contact-btn"
            type="submit"
            onClick={() => {
              alert("Data Saved Succussfully");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
