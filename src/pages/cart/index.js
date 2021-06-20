import Link from 'next/link'
import PageWrapper from "../../components/PageWrapper";
import React, {useCallback, useContext, useEffect, useState} from "react";
import withAuth from "../../middleware/withAuth";
import {destroy, list, quantity, remove, total} from "../../utils/localstorage";
import Input from "../../components/Core/Input";
import Button from "../../components/Core/Button";
import GlobalContext from "../../context/GlobalContext";
import {useRouter} from "next/router";

const CartPage = () => {
    const gContext = useContext(GlobalContext);
    const [carts, setCarts] = useState([])
    const router = useRouter()
    useEffect(() => {
        setCarts(list());
    }, [])

    const handleChangeProduct = useCallback((e, product) => {
        const value = e.target.value
        if (!value) {
            return
        }
        const diff = value - product.quantity
        quantity(product._id, diff)
        setCarts(list());
    }, [carts])

    const handleRemoveProduct = useCallback((e, product) => {
        remove(product._id)
        setCarts(list());
    }, [carts])

    const handleCheckout = useCallback(() => {
        if (!gContext.account) {
            if (!alert("Vui lòng đăng nhập trước khi Đặt hàng")) {
                gContext.toggleSignInModal()
            }
        } else {
            alert("Cám ơn bạn đã đặt hàng với chi tiết sản phẩm như sau: " + JSON.stringify(carts) + JSON.stringify(gContext.account))
            destroy()
            router.back()
        }
    }, [carts, gContext])

    return (
        <PageWrapper>
            <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
                <div className="container">
                    {!carts.length ?
                        <>
                            <div className="row justify-content-center">
                                <div className="col-lg-7 px-lg-9">
                                    {/* <!-- card start --> */}
                                    <div
                                        className="card-404 text-center"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                    >
                                        {/* <!-- card image end --> */}
                                        {/* <!-- card-icon start --> */}
                                        <div className="404-texts pt-14">
                                            <h3 className="card-title font-size-9 font-weight-bold">
                                                Rất tiếc bạn chưa chọn sản phẩm nào
                                            </h3>
                                            {/* <!-- card-texts start --> */}
                                            <p className="card-text font-size-4 px-xxl-28 px-xs-10 px-sm-13 px-lg-13 px-md-28 px-xl-22 px-0 mb-11">
                                                Hãy chọn sản phẩm của chúng tôi và quay lại nhé! Xin cám ơn
                                            </p>
                                            {/* <!-- card-texts end --> */}
                                            <Link href="/menu">
                                                <a className="btn btn-green btn-h-60 text-white rounded-5 w-180 m-auto text-uppercase">
                                                    Quay lại menu
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <!-- card end --> */}
                                </div>
                            </div>
                        </> :
                        <div>
                            <header className="container">
                                <h3>Giỏ hàng</h3>
                            </header>
                            {carts.map((product => <div key={product._id} className="mb-8">
                                {/* <!-- Single Featured Job --> */}
                                <div
                                    className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="media align-items-center">
                                                <div className="square-72 d-block mr-8">
                                                    <img style={{
                                                        display: "block",
                                                        width: "100%",
                                                        height: "auto"
                                                    }}
                                                         src={product.image} alt={product.name}/>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0">
                                                        <Link href="/#">
                                                            <a className="font-size-6 heading-default-color">
                                                                {product.title}
                                                            </a>
                                                        </Link>
                                                    </h3>
                                                    <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                                                        <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                                            <Link href="/product/xxxx">
                                                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                                                    <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                                                    {product.location}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                                            <Link href="/#">
                                                                <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                                                                    <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                                                    {product.category}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <Link href="/#">
                                                        <a className="font-size-3 text-default-color line-height-2">
                                                            {product.description}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 text-right pt-7 pt-md-5">
                                            <div className="row">
                                                <div className="col-md-6 align-items-center">
                                                    <div className="media justify-content-md-end">
                                                        <div className="image mr-5 mt-2">
                                                            Giá:
                                                        </div>
                                                        <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                                            <span className="text-black-2">{product.price}</span>{" "}VND
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="justify-content" style={{cursor: "pointer"}}>
                                                        <Input style={{
                                                            color: "black",
                                                            background: "white",
                                                            padding: "10px"
                                                        }} type="number" min={1} value={product.quantity}
                                                               onChange={(e) => handleChangeProduct(e, product)}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="justify-content" style={{cursor: "pointer"}}
                                                         onClick={(e) => handleRemoveProduct(e, product)}>
                                                        <svg
                                                            version="1.1"
                                                            className="close"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 60 60"
                                                            enableBackground="new 0 0 60 60"
                                                        >
                                                            <polygon
                                                                points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Featured Job --> */}
                            </div>))}
                            <div className="row">
                                <div className="col-md-6 text-right pt-7 pt-md-5"></div>
                                <div className="col-md-6 align-items-center text-right">
                                    <div className="media justify-content-md-end">
                                        <div className="media justify-content-md-end">
                                            <div className="image mr-5 mt-2">
                                                Total:
                                            </div>
                                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                                <span className="text-black-2">{total()}</span>{" "}VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-7">
                                        <Button type="button" onClick={handleCheckout}>Đặt hàng</Button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </PageWrapper>
    )
}
export default withAuth(CartPage)