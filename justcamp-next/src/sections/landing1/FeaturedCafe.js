import React from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/feature-brand-1.png";
import imgF2 from "../../assets/image/l1/png/feature-brand-2.png";
import imgF3 from "../../assets/image/l1/png/feature-brand-3.png";
import imgF4 from "../../assets/image/l1/png/feature-brand-4.png";
import imgF5 from "../../assets/image/l1/png/feature-brand-5.png";
import imgF6 from "../../assets/image/l1/png/feature-brand-6.png";

const FeaturedCafe = () => {
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
                <Link href="/#">
                  <a className="btn btn-outline-white text-uppercase">
                    VIEW MENU
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF1} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">
                    Cafe nâu sữa
                  </a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cafe nâu sữa
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        10
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                  Cho hương vị buồn vui lẫn lộn
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF2} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Nâu đá</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cafe nâu đá
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        7
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        5
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                  Cà phê đầy tình bạn
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF3} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">bạc xỉu</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cafe bạc xỉu
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        7
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        5
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                  Đồ uống cho những kẻ nặng tình
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF4} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">cafe đá xay</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cà phê đá xay{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        4
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                 Cà phê luôn là một ý tưởng hay
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF5} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">cà phê trứng</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cà phê trứng{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        7
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                  Cà phê làm cho mọi thứ trở nên khả thi
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img src={imgF6} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">cốt dừa sầu riêng</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Cà phê cốt dừa
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hà Nội
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        7
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                 Cà phê ngon cũng giống như tình bạn: đậm đà, nồng ấm và bền chặt.
                </p>
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      ADD TO CART
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCafe;
