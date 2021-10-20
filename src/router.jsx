
import Basket from "./pages/basket/Basket";

import Shop from "./pages/shop/Shop";
import {

  BASKET_ROUTE,
  
  SHOP_ROUTE,
} from "./utils/const";



export const publicRouter = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },

];
