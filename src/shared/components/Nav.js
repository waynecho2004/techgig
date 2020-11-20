import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            {' | '}
            <Link to='/search'>Search</Link>
            {'|'}
            <Link to='/favorites'>Favorites</Link>
            {'|'}
            <Link to='/about'>About Us</Link>
        </nav>
    );
}

export default Nav;