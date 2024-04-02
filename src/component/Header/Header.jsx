import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="container">
            <header className="header">
                <div className="header__logo">
                    <img src="src/assets/logo.svg" alt=""/>
                </div>
                <nav className={`header-nav ${isActive ? 'active' : ''}`}>
                    <NavLink to={'/'} className="header-nav__item"
                             onClick={() => document.body.style.overflowY = isActive ? 'auto' : 'hidden'}>Home</NavLink>
                    <NavLink to={'/about'} className="header-nav__item"
                             onClick={() => document.body.style.overflowY = isActive ? 'auto' : 'hidden'}>About</NavLink>
                    <NavLink to={'/contact'} className="header-nav__item"
                             onClick={() => document.body.style.overflowY = isActive ? 'auto' : 'hidden'}>Contact</NavLink>
                    <NavLink to={'/support'} className="header-nav__item"
                             onClick={() => document.body.style.overflowY = isActive ? 'auto' : 'hidden'}>Support</NavLink>
                </nav>
                <div onClick={() => {
                    setIsActive(!isActive)
                    document.body.style.overflowY = 'auto'
                }}
                     className={`header-burger ${isActive ? 'active' : ''}`}>
                    <span></span>
                </div>
            </header>
        </div>
    )
}