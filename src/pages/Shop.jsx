import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import FriutItem from "../commponents/FruitItem";

const Shop = observer(() => {
  const { FruitShopStore } = useContext(Context);
  
  return (
    <Row className="d-flex m-2">
      {FruitShopStore.fruits.map((fruit) => (
        <FriutItem key={fruit.id} fruit={fruit} />
      ))}
    </Row>
  );
});

export default Shop;
