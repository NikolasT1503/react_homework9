import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
            <header className={h.header}>
                <img src="https://img.artlebedev.ru/everything/moscow/logo/moscow-logo.gif" alt=""/>
            </header>
    )
}

export default Header;