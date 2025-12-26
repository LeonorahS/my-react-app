
//import { MenuItem } from "./MenuItem";


//const  items = ["Menu1", "Menu2", "Menu3", "Menu4"];

//export function Header() {
 //return(
 //<header className="header">
  // <h1>Bienvenue sur mon site React</h1>
   //{items.map(item => (<MenuItem key={item} title={item}/>))}
 
 //</header>
// )
//}
import { NavLink } from 'react-router-dom'; 
import MenuItem from './MenuItem';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-logo">
        <img src="/logo-kasa.svg" alt="Kasa" className="header-logo-img" />
      </NavLink>

      <nav className="header-nav">
        <MenuItem to="/">Accueil</MenuItem>
        <MenuItem to="/a-propos">À propos</MenuItem>
      </nav>
    </header>
  );
}