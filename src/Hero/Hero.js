import React, { useState } from 'react';
import './Hero.scss';
import logo from '../logo.svg';
import navLinks from '../navLinks';
import hamburger from './icon-hamburger.svg';
import close from './icon-close.svg';

const Hero = () => {

    const [menu, setMenu] = useState(false);

    return (
        <header className={menu ? 'nav active' : 'nav'}>
            <nav>
                <img src={logo} alt='loopstudios' className='logo'/>
                <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map((item, index) =>{
                        return(
                            <li key={index} className={'link' + index}>
                                <a href='https://github.com/MarleyReyna'>{item}</a>
                            </li>
                        )
                    })}
                </ul>
                <button className='hamburger-menu' onClick={() => setMenu(!menu)}>
                    <img src={menu ? close : hamburger} alt='hamburger menu' aria-hidden='false' />
                </button>
            </nav>
            <section className='hero-content'>
                <h1>
                    Immersive experiences that deliver
                </h1>
            </section>
        </header>
    );
}
 
export default Hero