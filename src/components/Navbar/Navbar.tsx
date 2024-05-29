import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
/* DESTRUCTURATION
    const myObject = {
        name : 'Tom',
        age : 18,
        isActive : true
    }

    const name = myObject.name;
    const age = myObject.age;

    const {name, age, } = myObject;
*/ 

    return (
        <>

            <nav>
                <NavLink
                    to="/"
                    className={ ( { isActive } ) => (isActive ? "activeLink" : undefined ) }>
                    Accueil
                </NavLink>

                <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Blog
                </NavLink>

                <NavLink
                    to="/article"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Ajouter un article
                </NavLink>
            </nav>
        </>
    )
}