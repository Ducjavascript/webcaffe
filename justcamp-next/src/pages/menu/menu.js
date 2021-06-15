import Head from 'next/head'
import {useState} from 'react'
import React from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/feature-brand-1.png";
import imgF2 from "../../assets/image/l1/png/feature-brand-2.png";
import imgF3 from "../../assets/image/l1/png/feature-brand-3.png";
import imgF4 from "../../assets/image/l1/png/feature-brand-4.png";
import imgF5 from "../../assets/image/l1/png/feature-brand-5.png";
import imgF6 from "../../assets/image/l1/png/feature-brand-6.png";

const Menu = () => {
 return (
   <>
     {/* <!-- FeaturedCafe Area -->  */}
     <div className="dark-mode-texts">
        <div className="container" 
        style={{
          marginTop: 100,
        }}>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner"  style={{borderRadius: '10px!important'}}>
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="http://www.dcmtlblog.com/wp-content/uploads/2016/05/Cafe-coffee-beans-DCMTL.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://trangtricafejan.files.wordpress.com/2014/01/banner12.jpg" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
            }} >
            <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </nav>
          </div>
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">


            {/* <!-- Section Title --> */}
            {/* <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">COFFEE MENU</h2>
              </div>
            </div> */}
            {/* <!-- Section Button --> */}
            {/* <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-white text-uppercase">
                    VIEW MENU
                  </a>
                </Link>
              </div>
            </div> */}
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
                  Cà phê nâu hay còn gọi là cà phê sữa vì khi cho sữa và cà phê quyện vào nhau sẽ có màu nâu, được pha chế từ hai thành phần chính là cà phê và sữa đặc
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
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
                  Cà phê sữa đá còn gọi là nâu đá là thức uống đặc trưng của Việt Nam, đặc biệt tại Sài Gòn. Thức uống này đã được thế giới công nhận là cách pha đặc trưng của Việt Nam với tên gọi tiếng Anh là Vietnamese Iced Coffee. Vậy cafe sữa đá nổi tiếng như thế nào, cách pha ly cafe sữa đá và các chú ý để pha ly cafe ngon sẽ được Bonjour Coffee mách bạn trong bài viết sau đây.
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
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
                  Bạc xỉu - món đồ uống đặc trưng ở Sài Gòn. “Bạc xỉu” là gọi tắt của cụm từ “bạc tẩy xỉu phé” (bạc - màu trắng, tẩy - ly không, xỉu - một ít, phé - cà phê), tiếng của người Tàu sống ở Sài Gòn. Hiểu một cách đơn giản, bạc xỉu chính là sữa nóng thêm chút cà phê.
                  Bạc xỉu là ly sữa vị cà phê chứ không phải là cà phê sữa.
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
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
                  Cafe đá xay mang chút vị đắng của cà phê, chút vị ngot của siro và vị béo của kem. Thưởng thức ly cafe đá xay trong những ngày hè là một trong những cách giúp bạn giải nhiệt cơn nóng, oi bức một cách nhanh chóng nhất.
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
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
                  Cà phê đen được phủ một lớp lòng đỏ trứng được đánh bồng bềnh, tơi xốp trông vừa bắt mắt lại thơm ngon. Thức uống này là sự kết hợp hoàn hảo giữa hương thơm béo ngậy của trứng, một chút vị ngọt của sữa đặc hoà lẫn với vị đắng của cà phê, hứa hẹn sẽ không làm cho thực khách thất vọng.
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
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
                  Cà phê cốt dừa hay còn gọi là cafe sữa dừa là thức uống có hương vị độc đáo. Thức uống này có hương béo ngậy của dừa, vị ngọt của sữa pha vị đậm đà của cafe
                </p>
                {/* <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div> */}
              </div>
              {/* <!-- End Feature One --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu