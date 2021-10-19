import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import FruitItem from "../commponents/FruitItem";

const Shop = observer(() => {
  const { FruitShopStore } = useContext(Context);
  
  return (
    <Container className="d-flex justify-content-start m-2" style={{ height: 390}}>
      {FruitShopStore.fruits.map((fruit, index) => (
        <FruitItem key={fruit.id} fruit={fruit} index={index}  height={20} />
      ))}
    </Container>
  );
});

export default Shop;
