import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <h2>Our Story</h2>
        <p>
          Welcome to our company! We are a team of dedicated professionals
          committed to providing exceptional services and products. Our journey
          began with a simple idea and a lot of hard work. Over the years, we
          have grown into a reputable organization with a strong customer base.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality solutions that meet the needs
          of our clients. We strive to innovate and continuously improve our
          offerings to stay ahead in the industry.
        </p>
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
