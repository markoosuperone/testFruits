import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Context } from "..";

const FriutItem = observer(({ fruit, index}) => {
  const { FruitShopStore } = useContext(Context);

  useEffect(() => {
    FruitShopStore.setTotalPrice(index);
  }, [fruit.counterKilo, index, FruitShopStore]);
  return (
    <Card style={{ width: 155, border: "1px solid grey" }} className="ml-2">
      <Image width={150} height={150} src={fruit.img} />
      <Container className="d-flex flex-column ">
        <Card.Title className="border-top d-flex justify-content-center">
          {fruit.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 pb-2 text-muted  d-flex justify-content-center border-bottom">
          {" "}
          {fruit.price} $/кг
          {fruit.discount
            ? ` ${fruit.discount} $/${fruit.discountWeight} кг`
            : null}{" "}
        </Card.Subtitle>
      </Container>
      <Card.Title
        className="d-flex justify-content-center border-bottom"
        style={{ fontSize: "30px" }}
      >
        <Button
          className="btn btn-light"
          onClick={() => FruitShopStore.increment(index)}
        >
          {" "}
          <AiOutlinePlus />
        </Button>
        {fruit.counterKilo} кг
        <Button
          className="btn btn-light"
          onClick={() => FruitShopStore.decrement(index)}
        >
          {" "}
          <AiOutlineMinus />
        </Button>
      </Card.Title>
      <Card.Title className="d-flex flex-column  ">
        <div className="d-flex justify-content-center">Итого:</div>
        <div className="d-flex justify-content-center">{fruit.totalPrice}$</div>
      </Card.Title>
      <Button
        className="btn btn-success"
        onClick={() => FruitShopStore.setBasket(fruit.id)}
        disabled={fruit.counterKilo === 0 ? true : false}
      >
        Добавить в корзину
      </Button>
    </Card>
  );
});
export default FriutItem;
