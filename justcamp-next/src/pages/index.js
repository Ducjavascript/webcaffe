import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedCafe from "../sections/landing1/FeaturedCafe";
import Content2 from "../sections/landing1/Content2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <FeaturedCafe />
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
