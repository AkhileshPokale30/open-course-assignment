import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";
import { FaHome, FaBookOpen, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>
      {/* React Helmet for SEO and Metadata */}
      <Helmet>
        <title>Open Course - Unlock Your Potential</title>
        <meta name="description" content="Discover world-class courses and transform your career with Open Course." />
      </Helmet>

      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Open <span>Course</span> <sup>beta</sup></h1>
        <ul>
          <li><FaHome /><a href="#home"> Home</a></li>
          <li><FaBookOpen /><a href="#courses"> Courses</a></li>
          <li><FaEnvelope /><a href="#contact"> Feedback</a></li>
          <li><a href="#signin" className="signin">Sign In</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Unlock Your Potential</h2>
        <p>Discover world-class courses and transform your career with Open Course</p>
        <button className="explore-btn">Explore Courses 🔍</button>
      </header>

      {/* Universities Section */}
      <section className="universities">
        <h3>Learn from world-class universities and companies</h3>
        <div className="university-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" alt="MIT" className="uni-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/en/4/4f/Harvard_University_seal.svg" alt="Harvard" className="uni-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Stanford_University_seal_2003.svg" alt="Stanford" className="uni-logo" />
        </div>
      </section>


      {/* Featured Courses */}
      <section className="courses">
        <h3>Featured on Open Course</h3>
        <div className="course-tabs">
          <span>Career Boost</span>
          <span>Applied Science & Social Studies</span>
          <span className="active-tab">Advanced Science & Technology</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Open Course. All rights reserved.</p>
        <p className="made-by">Made with ❤️ by Akhilesh</p>
      </footer>
    </div>
  );
}

export default App;
