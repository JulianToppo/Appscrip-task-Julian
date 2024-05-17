import React from "react";
import style from "@/styles/Product.module.css";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className={style.products_page}>
      <div className={style.products_filters}>
        <div className={style.products_filters_section1}>
          <p className={style.product_count}>{products.length + " ITEMS"}</p>
          <p className={style.showfilter}>{" > " + "Hide Filter"}</p>
        </div>
        <div className={style.products_filters_section2}>
          <select className={style.dropdown}>
            <option>Recommended</option>
          </select>
        </div>
      </div>
      <div className={style.product_cards}>
        {products.map((product_item,key) => {
          return (
           <ProductCard key={product_item.id}  product_item={product_item} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
