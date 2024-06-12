import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const Event = () => {
  const pdfURL = "src/assets/event/patrika.pdf";
  return (
    <section id="event">
      <div className="event-wrapper">
        <img
          src="src/assets/event/card.png"
          alt="Event Image"
          className="event-image"
          width="100px"
        />
        <div className="event-buttons">
          <a
            href={pdfURL}
            download={pdfURL.download}
            className="download-button"
          >
            Download Patrika
          </a>
          <a href={"https://www.youtube.com/"} target="_blank" rel="noopener noreferrer">
            Live Event Link
          </a>
        </div>
      </div>
    </section>
  );
};

export default Event;
