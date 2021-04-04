import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>
          Cricket Live
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              to="/livescore"
              className="nav-link"
              style={{ color: "white" }}
            >
              Live Scores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/schedule"
              className="nav-link"
              style={{ color: "white" }}
            >
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/series" className="nav-link" style={{ color: "white" }}>
              Series
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" style={{ color: "white" }}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ranking" className="nav-link" style={{ color: "white" }}>
              Ranking
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/polls" className="nav-link" style={{ color: "white" }}>
              Polls
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
