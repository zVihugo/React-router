import "./NavBar.css";

//Importando link

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/"> Home </Link>
        <Link to="/Home"> HomeAlternative </Link> */}

        <NavLink to="/" 
        // className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        >Home</NavLink>
        <NavLink to="/Home" 
        // className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        >HomeAlternative</NavLink>
    </nav>
  )
}

export default NavBar