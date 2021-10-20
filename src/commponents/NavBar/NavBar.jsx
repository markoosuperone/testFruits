import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import { BASKET_ROUTE, SHOP_ROUTE } from "../../utils/const";

const NavBar = observer(() => {
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav  className="nav_item">
          <div onClick={() => history.push(SHOP_ROUTE)}>
          ОВОЩИБАЗА
         </div>
        </Nav>

        <Nav className="ml-auto textColorWhite">
          <Button
            variant={"outline-light"}
            className="ml-2"
            onClick={() => history.push(BASKET_ROUTE)}
          >
            Корзина
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
});
export default NavBar;
