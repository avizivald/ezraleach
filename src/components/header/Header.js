import React from 'react';
import { Link  } from 'react-router-dom';

import { auth } from '../../firebase/firebase.config';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
        <div className='headerComponenet'>
            {console.log("currentUser   ",currentUser)}
            {/* <Link className='logo-container' to='/'> */}
                {/* <Logo className='logo' /> */}
            {/* </Link> */}
            <div className='options'>
                <Link className='option' to='/Exmple'>
                Exmple
                </Link>
                <Link className='option' to='/FiveCellGrid'>
                FiveCellGrid
                </Link>
                <Link className='option' to='/drogAndDrop'>
                drog And Drop
                </Link>
                <Link className='option' to='/selectPlace'>
                      זמני היום בעולם
                </Link>
                {currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                : 
                    <Link className='option' to='/'>
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
);

export default Header;