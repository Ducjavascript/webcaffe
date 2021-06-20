import React from "react";
import Link from "next/link";
import Products from "../../components/Products";

const FeaturedCafe = ({products}) => {
  return (
    <>
      {/* <!-- FeaturedCafe Area -->  */}
      <div className="pt-11 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">COFFEE MENU</h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/menu" as={"menu"}>
                  <a className="btn btn-outline-white text-uppercase">
                    VIEW MENU
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <Products products={products}/>
        </div>
      </div>
    </>
  );
};

export default FeaturedCafe;
