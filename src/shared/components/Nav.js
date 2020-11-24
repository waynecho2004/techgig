import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <div className="background-gray">
                <div>
                    <Navbar>
                        <Navbar.Brand as={Link} to="/" >Overreact</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Navigation;