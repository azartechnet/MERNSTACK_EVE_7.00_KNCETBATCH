import { Outlet,Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css';
const Layout=()=>{
    return (
        // <div>
        //     <nav>
        //         <ul>

        //             <li><Link to="/">Home</Link></li>

        //             <li><Link to="/blogs">Blogs</Link></li>
        //             <li><Link to="/contact">Contact</Link></li>

        //         </ul>
        //     </nav>
        //     <Outlet/>
        // </div>


        <div className="f1">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">My Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="glyphicon glyphicon-home">Home</Nav.Link>
                <Nav.Link as={Link} to="/Contact" className="glyphicon glyphicon-envelope">Contact</Nav.Link>
                <Nav.Link as={Link} to="/Blogs" className="glyphicon glyphicon-file">Blogs</Nav.Link>
                <Nav.Link as={Link} to="/NoPage" className="glyphicon glyphicon-list-alt">NoPage</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Outlet />
        </Container>
      </div>
    )
}

export default Layout;