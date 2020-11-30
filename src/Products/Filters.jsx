import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { recievedLogin } from '../redux/Actions/userActions';
// import { fetchProducts } from '../redux/Actions/productActions';
import { fetchProductsFilter } from '../redux/Actions/productFilterActions';
import { useHistory } from "react-router-dom";
// import Headers from './Headers'

let filters = (state) => state.filters

function Filters(props) {
    const [length, setLength] = useState(10);
    const filterToUse = useSelector(filters)
    const dispatch = useDispatch();
    React.useEffect(async ()=>{
        await dispatch(fetchProductsFilter())
    },[])
  return (
      <>
        <div className="filters">
            <div className="filter-heading">
                <div className="filter-button"><i className="fa fa-refresh"/> Reset Filters</div>
                <div>Filters</div>
            </div>
            <div className="filter-content">
                {filterToUse.filters && filterToUse.filters.map((v,i)=>{
                    // console.log(v);
                    return <div key={i} className="filter-container">
                        <div>{v.type}</div>
                        <div>
                            {v.type=="COLOUR" ?v.values.filter((f,i)=>i<12).map((f,i)=>{
                                // console.log(f)
                                    return <div key={i}>
                                        <input type="checkbox"/>
                                        <label>{f.title}</label>
                                    </div>
                            }):(v.type=="BRAND" ?<>{v.values.filter((f,i)=>props.brands.includes(f.value)).map((f,i)=>{
                                // console.log(f)
                                if(i<length)
                                    return <div key={i}>
                                        <input type="checkbox"/>
                                        <label>{f.title}</label>
                            </div>})}<a style={{color: "blue", fontSize: "14px", textDecoration: "underline"}} onClick={()=>{setLength(length===10?10000:10)}}>Show {length===10?"All":"Less"}</a></>:<div style={{display: "flex", justifyContent: "space-between", margin: "10px 0px"}}>
                                <select>
                                    {v.values.map((f)=><option key={f.key} value={f.key}>{f.displayValue}</option>)}
                                </select>
                                <select>
                                    {v.values.map((f)=><option key={f.key} value={f.key}>{f.displayValue=='Min'?'Max':f.displayValue}</option>)}
                                </select>
                            </div>)}
                            
                        </div>
                    </div>
                })}
                <div className="filter-container">
                        <div>DISCOUNT</div>
                        <div>
                            <div style={{display: "flex", justifyContent: "space-between", margin: "10px 0px"}}>
                                <select>
                                    <option>Min</option>
                                    <option value="10%">10%</option>
                                    <option value="20%">20%</option>
                                    <option value="30%">30%</option>
                                    <option value="40%">40%</option>
                                    <option value="50%">50%</option>
                                </select>
                                <select>
                                    <option>Max</option>
                                    <option value="10%">10%</option>
                                    <option value="20%">20%</option>
                                    <option value="30%">30%</option>
                                    <option value="40%">40%</option>
                                    <option value="50%">50%</option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </>
  );
}

export default Filters;
