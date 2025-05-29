import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumbs/BreadCrumb";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => {
    return e.id === Number(productId);
  });
  return (
    <div>
      <BreadCrumb product={product} />
    </div>
  );
};

export default Product;
