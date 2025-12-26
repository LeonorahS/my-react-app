/*export function MenuItem(props) {
 return(
 <li>{props.title}</li>
 )
}*/
import { NavLink } from 'react-router-dom';  

export default function MenuItem({ to, children }) {  
  return (
    <NavLink to={to} className="header-nav-item">
        {children}
        
    </NavLink>
  );
}