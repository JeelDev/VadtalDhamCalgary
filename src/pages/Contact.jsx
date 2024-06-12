import React from "react";
import "../styles/style.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section id="query-contact" className="contact-section">
        <h2>
          <span>Contact Us</span>
        </h2>
        <div className="contact-info">
          <p>
            <strong>Contact any of these numbers</strong>
          </p>
          <p>Manish Nakrani - (587) 664-3850</p>
          <p>Kavyesh Dave - (587) 337-4390</p>
          <p>Nimesh Patel - (403) 929-4895</p>
        </div>
        <div className="contact-info">
          <p>
            <strong>E-mail:</strong> vadtaldham.calgary@svg.org
          </p>
        </div>
        <div className="contact-info">
          <p>
            <strong>Address:</strong> 4805 Westwinds Dr NE, Calgary, AB T3J 4L4
          </p>
        </div>
      </section>
      <section id="donate" className="donate-section">
        <h2>
          <span>Donate Us</span>
        </h2>
        <div className="donate-info">
          <p>
            We accept donations through e-transfer via this email:
            <b> vadtaldham.calgary@svg.org</b>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
