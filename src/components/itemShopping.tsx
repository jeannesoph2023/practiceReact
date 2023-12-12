import React from "react";
import { useState } from "react";
import { CustomerQuote } from "../App";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
interface ItemShoppingProps {
  item: CustomerQuote;
  remove: () => void;
}
const ItemShopping: React.FC<ItemShoppingProps> = ({ item, remove }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [MINQ, setMINQ] = useState<number | undefined>(
    item.productDetail.minQuantity
  );
  const [step, setStep] = useState<number | undefined>(
    item.productDetail.quantitySteps
  );

  const initialprice = (MINQ ?? 0) * (item.price.itemPrice.amount ?? 0);

  const [totalPrice, setTotalPrice] = useState<number | undefined>(
    initialprice
  );
  const handleAdd = () => {
    if (
      item.price &&
      item.price.itemPrice &&
      typeof item.price.itemPrice.amount !== "undefined" &&
      step !== undefined &&
      typeof MINQ !== "undefined"
    ) {
      setMINQ((prev) => (prev !== undefined ? prev + step : 0));

      const price = (MINQ + step) * item.price.itemPrice.amount;

      setTotalPrice(price);
    }
  };
  const removeITEM = () => {
    if (
      item.price &&
      item.price.itemPrice &&
      typeof item.price.itemPrice.amount !== "undefined" &&
      step !== undefined &&
      typeof MINQ !== "undefined"
    ) {
      if (MINQ > 5) {
        setMINQ((prev) => (prev !== undefined ? prev - step : 0));

        const price = MINQ * item.price.itemPrice.amount;

        setTotalPrice(price);
      }
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="cardItems">
      <div>
        <b>
          {item.productDetail.productTitle}
          {"; "}
          {item.productDetail.manufacturerName}
          {"; "}
          {item.productDetail.manufacturerRefId}
        </b>
      </div>
      <div
        style={{
          alignSelf: "end",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <div style={{ margin: "10px", alignItems: "end" }}>
          {" "}
          Per {item.price.itemPrice.amount} unit, min{" "}
          {item.productDetail.minQuantity} unit
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 8px",
            }}
          >
            <div
              style={{ margin: "0px 10px", color: isLiked ? "red" : "#000" }}
              onClick={handleLike}
            >
              <FavoriteBorderIcon />
            </div>
            <div style={{ margin: "0px 10px" }} onClick={remove}>
              <DeleteOutlineIcon />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                height: "40px",
                width: "200px",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            >
              <div style={{ fontSize: "30px" }} onClick={removeITEM}>
                <RemoveIcon />
              </div>
              <div>
                <div style={{ fontSize: "18px" }}>
                  <b>{MINQ}</b>
                </div>
                <div> {totalPrice} € </div>
              </div>
              <div style={{ fontSize: "30px" }} onClick={handleAdd}>
                <AddIcon />
              </div>
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <InfoIcon style={{ color: "#5b99fc" }} />
          </div>
          <div>This quantity has been updated to minimum quantity</div>
        </div>
      </div>
    </div>
  );
};

export default ItemShopping;
