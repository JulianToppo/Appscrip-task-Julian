import React, { useState } from "react";
import style from "@/styles/Product.module.css";
import ProductCard from "./ProductCard";
import { useIsMobile } from "@/util/screenSizeContext";

const Products = ({ products, categories }) => {

  const isMobile= useIsMobile();

  const [showfilter, setshowfilter] = useState(true);

  console.log(categories)
  const handleClick = (e) => {
    e.preventDefault();
    setshowfilter((showfilter) => {
      return !showfilter;
    });
  };
  return (
    <div className={style.products_page}>
      <div className={style.products_filters}>
        <div className={style.products_filters_section1}>
          {
            isMobile?<></>:<p className={style.product_count}>{products.length + " ITEMS"}</p>
          }
        
          <p className={style.showfilter} onClick={handleClick}>
          {isMobile ? (
        'Filter'
      ) : (
        showfilter ? '< Show Filter' : '> Hide Filter'
      )}
          </p>
        </div>
        <div className={style.products_filters_section2}>
          <select className={style.dropdown}>
            <option>Recommended</option>
            <option>Newest First</option>
            <option>Popular</option>
            <option>Price:High to Low</option>
          </select>
        </div>
      </div>
      <div className={style.products}>
        {showfilter == false && (
          <div className={style.filterPage}>
            <h1>Filters</h1>
            <div className={style.filterFields}>
              {categories.map((categories_item,key) => {
                return <div key={key} className={style.filterCategory}>
                    <input className={style.checkbox} type="checkbox "></input>
                    <label>{categories_item}</label>
                </div>;
              })}
            </div>
          </div>
        )}
        <div className={style.product_cards}>
          {products.map((product_item, key) => {
            return (
              <ProductCard key={product_item.id} product_item={product_item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
