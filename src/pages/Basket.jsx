import React, { useContext, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { AiFillDelete } from "react-icons/ai";

const Basket = observer(() => {
  const { FruitShopStore } = useContext(Context);

  useEffect(() => {
    FruitShopStore.setTotalBasketPrice();
  }, [FruitShopStore.basket, FruitShopStore]);

  return (
    <ListGroup
      className="d-flex justify-content-center m-4"
      style={{ width: 300, border: "1px solid grey" }}
    >
      <h1 className="d-flex justify-content-center">Моя корзина</h1>
      {FruitShopStore.basket.map((item) => (
        <ListGroup.Item
          key={item.id}
          className="d-flex justify-content-between"
          style={{ fontSize: "25px" }}
        >
          {item.name} - {item.counterKilo}кг - {item.price}$
          <Button
            className="btn btn-light "
            onClick={() => FruitShopStore.removeBasketItem(item.id)}
          >
            <AiFillDelete></AiFillDelete>
          </Button>
        </ListGroup.Item>
      ))}
      <Button className="btn btn-success">
        {" "}
        Купить за {FruitShopStore.totalBasketPrice}$
      </Button>
    </ListGroup>
  );
});

export default Basket;
