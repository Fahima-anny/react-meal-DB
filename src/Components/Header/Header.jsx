import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                Meal DB
            </div>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to='/meals'>Meals</NavLink>
                    <NavLink to='/contact'>Contacts</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;