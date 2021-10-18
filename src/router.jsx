
import Basket from "./pages/Basket";

import Shop from "./pages/Shop";
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
