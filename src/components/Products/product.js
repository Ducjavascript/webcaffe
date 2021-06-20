import Link from "next/link";
import imgB1 from "../../assets/image/l1/png/feature-brand-1.png";
import React, {useCallback} from "react";
import {add,get} from '../../utils/localstorage'
import {useRouter} from "next/router";

const Product = ({product, typeColume = 4}) => {
    const router = useRouter()

    const addTocart = useCallback(() => {
        add(product)
        alert("thêm vào giỏ hàng thành công")
    }, [product])

    const onBuyNow = useCallback(() => {
        add(product);
        router.push("/cart", "cart")
    }, [product])

    return <div className={`col-${typeColume * 2} col-lg-${typeColume}`}>
        {/* <!-- Start Feature One --> */}
        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
            <div className="row mb-7">
                <div className="col-6 col-lg-6">
                    <div>
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
                </div>
                <div className="col-6 col-lg-6">
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
                    <p className="mb-7 font-size-4 text-gray">
                        {product.description}
                    </p>
                </div>
            </div>

            <div className="card-btn-group">
                <a className="btn btn-green text-uppercase btn-medium rounded-3" onClick={onBuyNow}>
                    Mua Ngay
                </a>
                <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
                   onClick={addTocart}>
                    <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                    Thêm vào giỏ
                </a>
            </div>
        </div>
        {/* <!-- End Feature One --> */}
    </div>
}
export default Product