import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumbs/BreadCrumb";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => {
    return e.id === Number(productId);
  });
  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
    </div>
  );
};

export default Product;
