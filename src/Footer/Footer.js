import React from 'react';
import './Footer.scss';
import logo from '../logo.svg';
import instagram from './socials/icon-instagram.svg';
import pinterest from './socials/icon-pinterest.svg';
import twitter from './socials/icon-twitter.svg';
import facebook from './socials/icon-facebook.svg';
import navLinks from '../navLinks';

const Footer = () => {

    const socials = [
        facebook, twitter, pinterest, instagram
    ]

    return (
        <footer>
            <div className='content-container'>
                <div className='left-container'>
                    <img src={logo} alt='loop studios'/>
                    <ul>
                        {navLinks.map((item, index) =>{
                            return(
                                <li key={'navLinks' + index} className={'link' + index}>
                                    <a href='https://github.com/MarleyReyna'>{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='right-container'>
                    <ul>
                        {socials.map((item, index) =>{
                            return(
                                <li key={'socials' + index} className={'icon' + index}>
                                    <img src={item} alt=''/>
                                </li>
                        )
                        })}
                    </ul>
                    <p>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;