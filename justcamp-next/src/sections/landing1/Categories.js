import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faglassmartini } from '@fortawesome/free-solid-svg-icons'
const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div
        className="pt-11 pt-lg-26 pb-lg-16"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">
                  Phân biệt các loại cafe
                </h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-green text-uppercase">
                    Categories All
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-blue bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i class="fas fa-coffee"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Espresso 
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Espresso là một phương pháp pha cà phê có nguồn gốc từ Ý, trong đó một lượng nhỏ nước gần sôi được ép dưới áp suất 9–10 bar thông qua các hạt cà phê được nghiền mịn. Cà phê espresso có thể được pha bằng nhiều loại hạt cà phê và độ rang khác nhau.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-spray bg-spray-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i class="fas fa-cocktail"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                      <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                        Latte Macchiato.
                      </h5>
                      <p className="font-size-4 font-weight-normal text-gray">
                        Latte macchiato là một loại đồ uống từ cà phê; tên có nghĩa là sữa nhuộm hoặc đánh dấu. Đánh dấu là vết cà phê espresso trên sữa được sử dụng. Đó là một vở kịch của "Espresso macchiato", là một loại cà phê espresso với một hoặc hai giọt sữa hoặc kem
                      </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-coral bg-coral-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i class="fas fa-mug-hot"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Cappuccino.
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      Cappuccino là một thức uống cà phê dựa trên espresso có nguồn gốc từ Ý, và được pha chế theo cách truyền thống với bọt sữa hấp. Các biến thể của thức uống liên quan đến việc sử dụng kem thay vì sữa, sử dụng sữa không sữa và hương liệu bằng bột quế hoặc sô cô la.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-red bg-red-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i class="fas fa-blender"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Cafe Latte.
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Caffe latte là thức uống cà phê được pha từ cà phê espresso và sữa hấp. Thuật ngữ này xuất phát từ tiếng Ý caffè e latte, caffelatte hoặc caffellatte, có nghĩa là "cà phê và sữa"
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-orange bg-orange-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i class="fas fa-restroom"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Cafe Mocha.
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Cà phê mocha còn được gọi là mocaccino là một biến thể có hương vị sô cô la của cà phê latte. Cách viết thông dụng nhất là mochaccino và mochachino.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-yellow bg-yellow-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                   <i class="fas fa-user-graduate"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Americano.
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Cafè Americano là một loại thức uống cà phê được pha chế bằng cách pha loãng cà phê espresso với nước nóng, tạo cho nó một hương vị tương tự, nhưng khác với hương vị cà phê pha truyền thống. Độ mạnh của ly Americano thay đổi theo số lần pha cà phê espresso và lượng nước thêm vào
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-turquoise bg-turquoise-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i class="fas fa-bed"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Espresso Con Panna.
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Espresso con panna, có nghĩa là "espresso với kem" trong tiếng Ý, là một tách espresso một hoặc hai lần với kem đánh bông. Ở Hoa Kỳ nó được gọi là café Vienne. Ở Pháp và ở Vương quốc Anh, nó được gọi là café Viennois
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-green bg-green-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i class="fas fa-child"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Cappuccino Viennese​{" "}
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                    Là thức uống liên quan đến việc sử dụng kem thay vì sữa, sử dụng sữa không sữa và hương liệu bằng bột quế hoặc sô cô la. Nó thường có khối lượng nhỏ hơn caffè latte, với một lớp bọt xốp dày hơn.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
