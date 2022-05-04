import React, { useState } from 'react';
import { RiHome5Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
  const logo = 'Q.';
  const [isClicked, setIsClicked] = useState(false);

  const handleMenu = () => {
    if (isClicked) {
      setIsClicked(false);
    }
  };
  return (
    <aside className='desktop-header'>
      <div className='dsk-ham-wrapper'>
        <button
          id='ham-menu'
          onClick={() => setIsClicked(!isClicked)}
          className={`hamburger hamburger--collapse ${
            isClicked ? 'is-active' : ''
          }`}
          aria-label='menu'
          aria-controls='navigation'
          type='button'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      <div className='desktop-nav'>
        {/* row1 */}
        <div className='dsk-nav-row dsk-nav-row1'>
          <h1>{logo}</h1>
        </div>
        {/* row2 */}
        <div className='dsk-nav-row dsk-nav-row2'>
          <ul className={`dsk-nav-list ${isClicked ? 'nav-expand' : ''}`}>
            <li>
              <NavLink onClick={handleMenu} to='/'>
                <span className='dsk-nav-icon'>
                  <RiHome5Line />
                </span>
                <span className='dsk-nav-text'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/about'>
                <span className='dsk-nav-icon'>
                  <AiOutlineUser />
                </span>
                <span className='dsk-nav-text'>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/skills'>
                <span className='dsk-nav-icon'>
                  <VscTools />
                </span>
                <span className='dsk-nav-text'>Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/projects'>
                <span className='dsk-nav-icon'>
                  <RiCodeSSlashFill />
                </span>
                <span className='dsk-nav-text'>Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/contact'>
                <span className='dsk-nav-icon'>
                  <HiOutlineMail />
                </span>
                <span className='dsk-nav-text'>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* row3 */}
        <div className='dsk-nav-row dsk-nav-row3'>
          <p className='version'>v1.0</p>
        </div>
      </div>
    </aside>
  );
};

export default DesktopNav;
