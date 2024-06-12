import React from "react";
import ImageGrid from "../pages/ImageGrid";
import "../styles/style.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <main>
      <div className="section-box"> {/* Wrapping the entire section in a div */}
        <section id="home">
          <video
            src="src/assets/videos/Murti_Sinhasan_Arrival_Highlight.mp4"
            controls="controls"
            muted
            loop
            autoPlay={true}
          ></video>
          {/* Use a div with a specific class to wrap the paragraph content */}
          <div className="content-wrapper">
          <h1>Join Us for Our Weekly Sabha & Satsang Every Saturday</h1>
            <p>
              We cordially invite you to participate in our enriching weekly Sabha
              and Satsang held <b>every Saturday (5PM to 8PM).</b>
              <br></br> Our gatherings offer a serene and spiritual environment
              where devotees come together to celebrate and deepen their faith in
              Shree Hari. <br></br>
              <b>Highlights of Our Sabha:</b>
              <br></br>
              <b> Bhajans:</b> Immerse yourself in the divine melodies and uplifting
              rhythms of Bhajans dedicated to Shree Hari.<br></br>{" "}
              <b>Spiritual Discourses:</b> Engage with inspiring stories and
              teachings that bring to life the profound wisdom of our spiritual
              traditions.
              <br></br>
              <b>Arati and Dinner:</b> Participate in arati and conclude the evening
              with a delicious prasad.
              <br></br>
              <br></br>&#9702; Below are some glimpses from our previous Sabhas,
              capturing the essence of our vibrant and joyful community gatherings:
            </p>
          </div>
          <ImageGrid />
        </section>
      </div>
    </main>
  );
};

export default Home;
