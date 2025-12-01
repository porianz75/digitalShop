import Classes from './ProductBox.module.css'
import {Link} from 'react-router-dom'
import {FaAngleLeft} from "react-icons/fa";
import ProductBoxSlider from "./productBox-slider/ProductBoxSlider";

function ProductsBox({data}){
    return (
        <div className={Classes.productsBox}>
             <div className={Classes.boxHeader}>
                 <h2 className={Classes.title}>{data?.title}</h2>
                 <Link to='/products' className={Classes.headerLink}>
                     <span>نمایش همه</span>
                     <span><FaAngleLeft/></span>
                 </Link>
             </div>
            <ProductBoxSlider products={data?.products}/>
        </div>
    )
}

export default ProductsBox;