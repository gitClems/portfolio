import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/nav.css";
import "./floatButton"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-bar'>
      <span className='my-name'><Link to={"/"}>BAMOGO Clément</Link></span>
      <div className='nav-list'>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/work"}>Réalisations</Link></li>
          <li><Link to={"/about"}>A propos de moi</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;