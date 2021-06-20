import React from "react";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import Sidebar from "../../components/Sidebar";
import {Select} from "../../components/Core";
import Products from "../../components/Products";
import withAuth from "../../middleware/withAuth";
import {getData} from "../../utils/fetchData";

const defaultCountries = [
  {value: "sp", label: "Hà Nội"},
  {value: "bd", label: "Sài Gòn"},
  {value: "usa", label: "Đà Nẵng"},
  {value: "uae", label: "Ninh Bình"},
  {value: "pk", label: "Thái Bình"},
];

const Menu = ({products}) => {
  return (
      <>
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-xs-8">
                  <Sidebar/>
                </div>
                <div className="col-12 col-md-8 col-xs-12 ">
                  {/* <!-- form --> */}
                  <form
                      action="/"
                      className="search-form search-2-adjustment ml-lg-0 ml-md-15"
                  >
                    <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                      <div className="filter-inputs">
                        <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                          <input
                              className="form-control focus-reset pl-13"
                              type="text"
                              id="keyword"
                              placeholder="Expresso"
                          />
                          <span
                              className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                        </div>
                        {/* <!-- .select-city starts --> */}
                        <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                          <Select
                              options={defaultCountries}
                              className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                              border={false}
                          />

                          <span
                              className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                        </div>
                        {/* <!-- ./select-city ends --> */}
                      </div>
                      <div className="button-block">
                        <button
                            className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="pt-12 ml-lg-0 ml-md-15">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="font-size-4 font-weight-normal text-default-color">
                        <span className="heading-default-color">120</span>
                        results for{" "}
                        <span className="heading-default-color">UI Designer</span>
                      </h5>
                      <div className="d-flex align-items-center result-view-type">
                        <Link href="/search-list">
                          <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                            <i className="fa fa-list-ul"></i>
                          </a>
                        </Link>
                        <Link href="/search-grid">
                          <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                            <i className="fa fa-th-large"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <Products products={products} typeColume={6}/>
                    <div className="text-center pt-5 pt-lg-13">
                      <Link href="/#">
                        <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center">
                          Load More{" "}
                          <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- form end --> */}
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </>
  );
};
Menu.getInitialProps = async (ctx) => {
  // Ensures material-ui renders the correct css prefixes server-side
  let products=[]
  const res= await getData( "product?category=all&title=all")
  products= res.products
  return {
    products,
  };
}
export default withAuth(Menu);
