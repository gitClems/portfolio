/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";
import "./floatButton"
import FloatButton from './floatButton';

function NavbarFonction() {
  return (
    <nav className='nav-bar'>
      <div className='my-name'><span>BAMOGO Clément</span></div>
      <div className='nav-list'>
        <ul>
          <li><a href='#'>Accueil</a></li>
          <li><a href='#'>Réalisations</a></li>
          <li><a href='#'>A propos de moi</a></li>
        </ul>
      </div>
      <div className='network-floatbutton'><FloatButton size={50} backgroundColor="green" borderRadius={50}></FloatButton></div>
    </nav>
  );
}

export default NavbarFonction;