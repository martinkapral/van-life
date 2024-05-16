import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPricing() {
  const { van } = useOutletContext();
  return (
    <h3 className="det-van-price">
      ${van.price}
      <span>/day</span>
    </h3>
  );
}
