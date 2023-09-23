import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <StoreIcon style={{ fontSize: "50" }} />
          </Link>
          <Nav style={{ fontSize: "30", display: "flex", alignItems: "center", gap: "50px" }}>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/shopping-card" style={{ fontSize: "30" }}><ShoppingBagOutlinedIcon style={{ fontSize: "30" }}/></Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {/*lässt zu das verschachtelte Elemente in der App gerendert werden */}
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
