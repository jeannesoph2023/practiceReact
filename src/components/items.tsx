type CustomerQuote = {
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
export const mockCustomerQuoteCart: CustomerQuote[] = [
  {
    productId: "4703449",
    quantity: 12,
    imageInfo: {
      image: "/catalog/images/products/image-default.svg",
      srcset:
        "/catalog/images/products/image-default.svg?type=xsmall 72w,/catalog/images/products/image-default.svg?type=small 160w,/catalog/images/products/image-default.svg?type=medium 320w,/catalog/images/products/image-default.svg?type=large 480w,/catalog/images/products/image-default.svg?type=xlarge 960w",
      imageAlt: "QUICK PRD 20R KA 3P",
    },
    productDetail: {
      gtin: "3606480387081",
      opcoProductId: "A9L16296",
      manufacturerRefId: "A9L16296",
      productTitle: "QUICK PRD 20R KA 3P",
      manufacturerName: "SCHNEIDER ELECTRIC",
      manufacturerRef: "",
      customerReference: "",
      brandName: "Schneider Distribution",
      contentUnit: "MLT",
      minQuantity: 5,
      quantitySteps: 5,
    },
    price: {
      netPrice: {
        amount: 2100,
        scale: 2,
        currency: "EUR",
      },
      itemPrice: {
        amount: 25200,
        scale: 2,
        currency: "EUR",
      },
    },
  },
  {
    productId: "5196233",
    quantity: 6,
    imageInfo: {
      image: "/catalog/images/products/image-default.svg",
      srcset:
        "/catalog/images/products/image-default.svg?type=xsmall 72w,/catalog/images/products/image-default.svg?type=small 160w,/catalog/images/products/image-default.svg?type=medium 320w,/catalog/images/products/image-default.svg?type=large 480w,/catalog/images/products/image-default.svg?type=xlarge 960w",
      imageAlt: "BACK-UPS 500VA AVR 230V",
    },
    productDetail: {
      gtin: "3606480387081",
      opcoProductId: "BX500CI",
      manufacturerRefId: "BX500CI",
      customerReference: "CUSTOMER_REFERENCE_5196233",
      productTitle: "BACK-UPS 500VA AVR 230V",
      manufacturerName: "SCHNEIDER ELECTRIC",
      manufacturerRef: "SCHNEIDER ELECTRIC",
      brandName: "APC",
      contentUnit: "MLT",
      minQuantity: 5,
      quantitySteps: 5,
    },
    price: {
      netPrice: {
        amount: 6000,
        scale: 2,
        currency: "EUR",
      },
      itemPrice: {
        amount: 36000,
        scale: 2,
        currency: "EUR",
      },
    },
  },
];
