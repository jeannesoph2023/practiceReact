import React from "react";

import "./App.css";
import { mockCustomerQuoteCart } from "./components/items";
import ItemShopping from "./components/itemShopping";
import { useState } from "react";

export type CustomerQuote = {
  productId: string;
  quantity?: number;
  productDetail: CustomerQuoteProductDetail;
  imageInfo: CustomerQuoteImageInfo;
  price: CustomerQuotePrice;
};

type CustomerQuoteProductDetail = {
  productTitle: string;
  brandName?: string;
  customerReference?: string;
  gtin?: string;
  manufacturerRefId?: string;
  manufacturerName?: string;
  manufacturerRef?: string;
  opcoProductId?: string;
  minQuantity?: number;
  quantitySteps?: number;
  contentUnit?: string;
};

type CustomerQuoteImageInfo = {
  image: string;
  srcset: string;
  imageAlt?: string;
};

type CustomerQuotePrice = {
  netPrice: PriceCurrency;
  itemPrice: PriceCurrency;
  quotePrice?: PriceCurrency;
};
export interface PriceCurrency {
  amount?: number;
  scale?: number;
  currency?: string;
}

function App() {
  const [shoppingITEMS, setShoppingITEMS] = useState<CustomerQuote[]>(
    mockCustomerQuoteCart
  );

  const handleDelete = (itemID: string) => {
    setShoppingITEMS((prevItems) =>
      prevItems.filter((item: CustomerQuote) => item.productId !== itemID)
    );
  };

  return (
    <div className="App">
      <div className="cartComponents">
        {shoppingITEMS.map((item: CustomerQuote) => (
          <ItemShopping
            key={item.productId}
            item={item}
            remove={() => handleDelete(item.productId)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
