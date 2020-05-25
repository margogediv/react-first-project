import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={`${s.iteam} ${s.active}`}>
      <a>Profile</a>
    </div>
    <div className={s.iteam}>
      <a>Messages</a>
    </div>
    <div className={s.iteam}>
      <a>News</a>
    </div>
    <div className={s.iteam}>
      <a>Musik</a>
    </div>
    <div className={`${s.iteam} ${s.active}`}>
      <a>Setting</a>
    </div>
  </nav>;
}

export default Navbar;
