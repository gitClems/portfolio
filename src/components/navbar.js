/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/nav.css";
import "./floatButton"

function NavbarFonction() {
  return (
    <nav className='nav-bar'>
      <div className='my-name'><span>BAMOGO Clément</span></div>
      <div className='nav-list'>
        <ul>
          <li><a href='#' className='active'>Accueil</a></li>
          <li><a href='#'>Réalisations</a></li>
          <li><a href='#'>A propos de moi</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarFonction;