import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import FriutItem from "../commponents/FruitItem";

const Shop = observer(() => {
  const { FruitShopStore } = useContext(Context);
  
  return (
    <Container className="d-flex justify-content-start m-2">
      {FruitShopStore.fruits.map((fruit, index) => (
        <FriutItem key={fruit.id} fruit={fruit} index={index} />
      ))}
    </Container>
  );
});

export default Shop;
