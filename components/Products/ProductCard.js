import Image from "next/image";
import React from "react";
import style from "@/styles/ProductCard.module.css";

const ProductCard = ({ product_item }) => {
  return (
    <div className={style.product_card}>
      <div className={style.section1}>
        <Image
          src={product_item.image}
          alt={product_item.description}
          width={500}
          height={300}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={style.section2}>
        <p className={style.product_title}>{product_item.title.slice(0,25)}{product_item.title.length>25?"...":""}</p>
        <div className={style.product_price_and_wishlist}>
 <p className={style.price}>{product_item.price}</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            
        </div>
       
      </div>
    </div>
  );
};

export default ProductCard;