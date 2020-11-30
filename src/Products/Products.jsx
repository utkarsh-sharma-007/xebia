import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import { recievedLogin } from '../redux/Actions/userActions';
import { fetchProducts } from '../redux/Actions/productActions';
// import { fetchProductsFilter } from '../redux/Actions/productFilterActions';
// import { useHistory } from "react-router-dom";
import Headers from './Headers';
import Filters from './Filters';
import ProductCard from './ProductCard';

function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// let user = (state) => state.user
let product = (state) => state.product
function Products() {
    const [uniqueBrands, setUniqueBrands] = useState([]);
    // const history = useHistory();
    const dispatch = useDispatch();
    const products = useSelector(product)
    useEffect(async ()=>{
        await dispatch(fetchProducts())
    },[])
    useEffect(()=>{
        console.log(products);
        let a = products.products.map(v=>v.brand).filter(getUnique)
        setUniqueBrands(a);
    },[products])
  return (
      <>
        <Headers/>
        <hr/>
        <div className="body container">
            <div style={{display: "flex"}}>
                <div style={{width: "25%", textAlign: "left"}}>
                    <Filters brands={uniqueBrands}/>
                </div>
                <div style={{width: "75%", textAlign: "left"}}>
                    <div style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
                        {products.products && products.products.map((v,i)=><ProductCard key={i} product={v}/>)}
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default Products;
