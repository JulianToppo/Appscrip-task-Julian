import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeading from "@/components/PageHeading/PageHeading";
import Products from "@/components/Products/Products";
import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const categoriesResult = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const categories = await categoriesResult.json();

  return {
    props: {
      products,
      categories,
    },
  };
}

const Home = ({ products, categories }) => {
  return (
    <div>
      <Head>
        <title>Appscrip Interview Task</title>
        <meta name="description" content="This is a part of appscrip interview process which clones an ecommerce website" />
      </Head>
      <Header />
      <PageHeading />
      <Products products={products} categories={categories} />
      <Footer />
    </div>
  );
};

export default Home;
