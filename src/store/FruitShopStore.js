import { makeAutoObservable } from "mobx";
export default class FruitShopStore {
  constructor() {
    this._fruits = [
      {
        id: 1,
        name: "Банан",
        price: 10,
        discount: null,
        discountWeight: null,
        img:
          "https://m.dom-eda.com/uploads/images/catalog/item/7e6fd19d46/0c87fefc9a_100crop.jpg",
        counterKilo: 0,
        totalPrice: 0,
      },
      {
        id: 2,
        name: "Яблоко",
        price: 8,
        discount: null,
        discountWeight: null,
        img:
          "https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_100crop.jpg",
        counterKilo: 0,
        totalPrice: 0,
      },
      {
        id: 3,
        name: "Папая",
        price: 10,
        discount: 25,
        discountWeight: 3,
        img:
          "https://m.dom-eda.com/uploads/images/catalog/item/b230c322da/ea073f8b3b_100crop.jpg",
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

  increment(indx) {
    const currentItem = this._fruits[indx];
    currentItem.counterKilo = currentItem.counterKilo + 1;
  }

  decrement(indx) {
    const currentItem = this._fruits[indx];
    if (currentItem.counterKilo > 0) {
      currentItem.counterKilo = currentItem.counterKilo - 1;
    } else {
      currentItem.counterKilo = 0;
    }
  }

  removeBasketItem(id) {
    this._basket = this._basket.filter((item) => item.id !== id);
  }

  setDiscount(indx, countKilo) {
    const currentItem = this._fruits[indx];
    const currentPrice = currentItem.price;
    const currentDiscount = currentItem.discount;
    const currentDiscountWeight = currentItem.discountWeight;

    const priceWithDiscount =
      Math.floor(countKilo / currentDiscountWeight) * currentDiscount;
    const priceWithoutDiscount =
      (countKilo % currentDiscountWeight) * currentPrice;
    return priceWithDiscount + priceWithoutDiscount;
  }

  setBasket(id) {
    const currentIndex = this._basket.findIndex((item) => item.id === id);
    const currentFruitsIndx = id - 1;
    const currentBasketItem = this._basket[currentIndex];
    const currentFruitItem = this._fruits[currentFruitsIndx];

    if (currentIndex !== -1) {
      currentBasketItem.counterKilo =
        currentBasketItem.counterKilo + currentFruitItem.counterKilo;

      currentBasketItem.price =
        currentFruitItem.discount &&
        currentBasketItem.counterKilo >= currentFruitItem.discountWeight
          ? this.setDiscount(currentFruitsIndx, currentBasketItem.counterKilo)
          : currentBasketItem.price + currentFruitItem.totalPrice;
    } else {
      const newItem = {
        name: currentFruitItem.name,
        price: currentFruitItem.totalPrice,
        counterKilo: currentFruitItem.counterKilo,
        id: currentFruitItem.id,
      };
      this._basket.push(newItem);
    }

    currentFruitItem.counterKilo = 0;
    currentFruitItem.totalPrice = 0;
  }

  setTotalPrice(indx) {
    const currentItem = this._fruits[indx];
    const currentPrice = currentItem.price;
    const currentDiscount = currentItem.discount;
    const currentDiscountWeight = currentItem.discountWeight;
    const currentCountKilo = currentItem.counterKilo;
    if (currentDiscount && currentCountKilo >= currentDiscountWeight) {
      currentItem.totalPrice = this.setDiscount(indx, currentCountKilo);
    } else {
      currentItem.totalPrice = currentPrice * currentCountKilo;
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
