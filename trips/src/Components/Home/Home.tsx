import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <div className="b">
    <div className="home-container">
      <header className="home-header">
        <h1>Home</h1>
      </header>
      <div className="home-buttons">
        <Link to="./Trips">
          <button className="home-button">To all trips</button>
        </Link>
        <Link to="/registration">
          <button className="home-button">To registration</button>
        </Link>
        <Link to="/login">
          <button className="home-button">To log in</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
