
import React from "react";
import Product from "./product";
const Products = ({products, typeColume=4}) => {
    return <div className="pt-6">
        <div className="row justify-content-center">
            {(products||[]).map((value)=><Product key={value.id} product={value} typeColume={typeColume}/>)}
        </div>
    </div>
}
export default Products