
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [user, setUser] = useState()


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showBtn = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showBtn()

    }, [])

    window.addEventListener('resize', showBtn)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <h2>Geekies</h2>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                Community
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Resources' className='nav-links' onClick={closeMobileMenu}>
                                Resources
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/getStarted' className='nav-links' onClick={closeMobileMenu}>
                                Get Started
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                {/* Profile */}
                                <i className="fas fa-user-circle fa-2x" />
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
