import React from "react";
import style from "@/styles/PageHeading.module.css";

const PageHeading = () => {
  return (
    <div className={style.pageheading}>
      <div className={style.heading}>
        <p>DISCOVER OUR PRODUCTS</p>
      </div>

      <div className={style.page_information}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
};

export default PageHeading;
