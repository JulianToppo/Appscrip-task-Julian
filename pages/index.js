import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeading from "@/components/PageHeading/PageHeading";
import Products from "@/components/Products/Products";
import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

const Home = ({ products }) => {
  return (
    <div>
      <Header />
      <PageHeading />
      <Products products={products} />
      <Footer/>
    </div>
  );
};

export default Home;
