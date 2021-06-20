import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import ProfileSidebar from "../../components/ProfileSidebar";

import Products from "../../components/Products";
import {useRouter} from "next/router";
import imgB1 from "../../assets/image/l1/png/feature-brand-1.png";

const ProductDetail = ({ product={
    id:"dafasdfa",
    image:"",
    title: "Cafe sữa đá",
    price: 10000,
    location:"Hà Nội",
    description:" thơm ngon đậm đà",
    category:"Cafe Trung nguyên",
    inStock:10,
    sold:9
} }) => {
    const router = useRouter()
    return (
        <>
            <PageWrapper headerConfig={{ button: "profile" }}>
                <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
                    <div className="container">
                        {/* <!-- back Button --> */}
                        <div className="row justify-content-center">
                            <div className="col-12 dark-mode-texts">
                                <div className="mb-9">
                                        <a className="d-flex align-items-center ml-4" onClick={() => router.back()}>
                                            <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                                            <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                                        </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- back Button End --> */}
                        <div className="row">
                            {/* <!-- Left Sidebar Start --> */}
                            <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                                <div >
                                    <Link href={'/product/1'}>
                                        <a style={{
                                            display: "block",
                                            cursor: "pointer"
                                        }}>
                                            <img style={{
                                                display: "block",
                                                width: "100%",
                                                height: "auto"
                                            }} src={product.image || imgB1} alt=""/>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <h2 className="mt-n4">
                                        <Link href="/product/xxxx">
                                            <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                                {product.title}
                                            </a>
                                        </Link>
                                    </h2>
                                    <ul className="list-unstyled mb-1 card-tag-list">
                                        <li>
                                            <Link href="/product/xxxx">
                                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                                    <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                                    {product.location}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                                    <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                                    {product.category}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/xxxx">
                                                <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                                    <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                                    {product.price}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Left Sidebar End --> */}
                            {/* <!-- Middle Content --> */}
                            <div className="col-12 col-xxl-5 col-lg-8 col-md-7 order-2 order-xl-1">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                                    <div className="bg-white rounded-4 shadow-9">
                                        {/* <!-- Tab Section Start --> */}
                                        <Nav
                                            className="nav border-bottom border-mercury pl-12"
                                            role="tablist"
                                        >
                                            <li className="tab-menu-items nav-item pr-12">
                                                <Nav.Link
                                                    eventKey="one"
                                                    className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                                                >
                                                    Mô tả
                                                </Nav.Link>
                                            </li>
                                        </Nav>
                                        {/* <!-- Tab Content --> */}
                                        <Tab.Content>
                                            <Tab.Pane eventKey="one">
                                                {/* <!-- Excerpt Start --> */}
                                                <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                                                    <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                                                        About
                                                    </h4>
                                                    <p className="font-size-4 mb-8">
                                                        {product.description}
                                                    </p>
                                                </div>
                                                {/* <!-- Excerpt End --> */}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            {/* <!-- Middle Content --> */}
                            {/* <!-- Right Sidebar Start --> */}
                            <div className="col-12 col-xxl-4 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                                <div className="pl-lg-5">
                                    <h4 className="font-size-6 font-weight-semibold mb-0">
                                        Sản phẩm tương tự
                                    </h4>
                                    {/*<ul className="list-unstyled">*/}
                                        <Products typeColume={12}/>
                                    {/*</ul>*/}
                                </div>
                            </div>
                            {/* <!-- Right Sidebar End --> */}
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default ProductDetail;
