import { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaUser} from "react-icons/fa";
import "../Navbar/Navbar.css"

function Navbar({black}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	return (
		<header>
			<Link to="/"><h3>ALÔ COMUNIDADES</h3></Link>
			<nav ref={navRef} >
				<ul className="nav-ul">
					<li>
                    <Link to="/sobre" onClick={showNavbar}>QUEM SOMOS</Link>
					</li>
					<li>
                    <Link to="/comunidades" onClick={showNavbar}>COMUNIDADES</Link>
					</li>
					<li>
                    <Link to="/projetos" onClick={showNavbar}>PROJETOS</Link>
					</li>
					<li>
					<Link to="/noticias" onClick={showNavbar}>NOTÍCIAS</Link>
					</li>
                    <li>
                    <Link to="/impactosocial" onClick={showNavbar}>IMPACTO SOCIAL</Link>
                    </li>
                    <li>
                    <Link to="/contato" onClick={showNavbar}>CONTATO</Link>
                    </li>
                    <li>
                    <Link to="/login"> <FaUser /> </Link>
                    </li>
                    <li>
                    <button className="doar">DOAR AGORA</button>
                    </li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
