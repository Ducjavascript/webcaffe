import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedCafe from "../sections/landing1/FeaturedCafe";
import Content2 from "../sections/landing1/Content2";
import withAuth from "../middleware/withAuth";
import {getData} from "../utils/fetchData";

const IndexPage = ({products}) => {
    return (
        <>
            <PageWrapper
                headerConfig={{
                    bgClass: "dynamic-sticky-bg",
                }}
            >
                <Hero/>
                <Brands/>
                <Categories/>
                <FeaturedCafe products={products}/>
                <Content1/>
                <Content2/>
            </PageWrapper>
        </>
    );
};
IndexPage.getInitialProps = async (ctx) => {
    // Ensures material-ui renders the correct css prefixes server-side
    let products=[]
    const res= await getData( "product?category=all&title=all&page=0&limit=6")
    products= res.products
    return {
        products,
    };
}
export default withAuth(IndexPage);
