
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { BASKET_ROUTE, SHOP_ROUTE } from "../utils/const";

const NavBar = observer(() => {
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          ОВОЩИБАЗА
        </NavLink>

        <Nav className="ml-auto" style={{ color: "white" }}>
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
