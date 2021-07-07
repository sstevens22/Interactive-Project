import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { Button2} from './Button2';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

        return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick=
                {closeMobileMenu}>
                    FATE <i className='fas fa-moon' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tarot' className='nav-links' onClick={closeMobileMenu}>
                            Tarot
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/horoscope' className='nav-links' onClick={closeMobileMenu}>
                            Horoscope
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                    
                </ul>
                {button && <Button2 buttonStyle='btn--outline'>Log In</Button2>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
