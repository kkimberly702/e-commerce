import React from 'react';
import '../Components/Header.css';
import { Link } from 'react-router-dom'
//COMPONENTS
import Home from './Home';

// ICONS
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Header() {
    return (
        <div className='header'>
{/* LOGO */}
<FavoriteBorderIcon className='logo'/>
<img className='logo-ulta' src='images/ulta-logo.png'/>

{/* SEARCH BAR */}
            <div className='search-bar'>
                <input className='search-box' type='text'placeholder='Search'/>
                <SearchIcon className='search-icon'/>
            </div>

{/* OPTIONS BAR */}
            <div className='options-bar'>
                <span className='option1'>Hello, Gorgeous  </span>

            </div>
            <div className='options-bar'>
                <span className='option2'>Sign In </span>
                
            </div>
            <div className='options-bar'>
                <span className='option3'> Find a Store</span>
                
            </div>
{/* SHOPPING BAG */}
            <div className='options-bar'>
                <span className='option4'> <ShoppingBagIcon /></span>
                <span id='bag-counter'>0</span>
                
            </div>

        </div>
    )
}

export default Header;