import Skeleton from "react-loading-skeleton";
import Classes from '../../product-card/ProductCard.module.css'

function ProductCardLoading(){
    return (
        <div className={Classes.card}>
            <Skeleton className={Classes.imgWrapper} style={{marginBottom:'26px',lineHeight:1.5}}/>
            <Skeleton height={15} style={{margin:'0 8px',width:'calc(100% - 16px)'}}/>
            <Skeleton  width={100} height={15} style={{margin:'0 8px'}}/>
            <div style={{display:'flex'}}>
                <Skeleton width={60} height={12} style={{margin:'0 16px'}}/>
                <Skeleton width={60} height={12}/>
            </div>
        </div>
    )
}
export default ProductCardLoading;
