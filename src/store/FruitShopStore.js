import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
export default class FruitShopStore {
  constructor() {
    this._fruits = [
      {
        id: 1,
        name: "Банан",
        price: 10,
        discount: null,
        discountWeight: null,
        img: "https://m.dom-eda.com/uploads/images/catalog/item/7e6fd19d46/0c87fefc9a_100crop.jpg",
        counterKilo: 0,
        totalPrice: 0,
      },
      {
        id: 2,
        name: "Яблоко",
        price: 8,
        discount: null,
        discountWeight: null,
        img: "https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_100crop.jpg",
        counterKilo: 0,
        totalPrice: 0,
      },
      {
        id: 3,
        name: "Папая",
        price: 10,
        discount: 15,
        discountWeight: 3,
        img: "https://m.dom-eda.com/uploads/images/catalog/item/b230c322da/ea073f8b3b_100crop.jpg",
        counterKilo: 0,
        totalPrice: 0,
      },
    ];

    this._basket = [];

    this._totalBasketPrice = 0;

    makeAutoObservable(this);
  }

  setTotalBasketPrice() {
    let price = 0;
    this._basket.map((item) => (price = price + item.price));
    this._totalBasketPrice = price;
  }

  increment(id) {
    this._fruits[id - 1].counterKilo = this._fruits[id - 1].counterKilo + 1;
  }

  decrement(id) {
    if (this._fruits[id - 1].counterKilo > 0) {
      this._fruits[id - 1].counterKilo = this._fruits[id - 1].counterKilo - 1;
    } else {
      this._fruits[id - 1].counterKilo = 0;
    }
  }

  removeBasketItem(id) {
    this._basket = this._basket.filter((item) => item.id !== id);
  }

  setBasket(id) {
    const newItem = {
      name: this._fruits[id - 1].name,
      price: this._fruits[id - 1].totalPrice,
      id: uuidv4(),
    };
    this._basket.push(newItem);
    this._fruits[id - 1].counterKilo = 0;
    this._fruits[id - 1].totalPrice = 0;
  }

  setTotalPrice(id) {
    const curentPrice = this._fruits[id - 1].price;
    const curentDiscount = this._fruits[id - 1].discount;
    const curentDiscountWeight = this._fruits[id - 1].discountWeight;
    const curentCountKilo = this._fruits[id - 1].counterKilo;
    if (curentDiscount && curentCountKilo >= curentDiscountWeight) {
      const priceWithDicsount =
        Math.floor(curentCountKilo / curentDiscountWeight) * curentDiscount;
      const priceWithoutDiscount =
        (curentCountKilo % curentDiscountWeight) * curentPrice;
      this._fruits[id - 1].totalPrice =
        priceWithDicsount + priceWithoutDiscount;
    } else {
      this._fruits[id - 1].totalPrice = curentPrice * curentCountKilo;
    }
  }

  get basket() {
    return this._basket;
  }

  get fruits() {
    return this._fruits;
  }

  get totalBasketPrice() {
    return this._totalBasketPrice;
  }
}
