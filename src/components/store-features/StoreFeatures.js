import { TbTruckDelivery } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import classes from './StoreFeatures.module.css'
import StoreFeatureItem from "./storeFeature-item/StoreFeatureItem";

const features = [
    {icon :<TbTruckDelivery/> , title:'ارسال رایگان', content:'ارسال رایگان در تمامی سفارشات'},
    {icon :<FaMedal/> , title:'ارسال رایگان', content:'ارسال رایگان در تمامی سفارشات'},
    {icon :<FaHandHoldingHeart/> , title:'ارسال رایگان', content:'ارسال رایگان در تمامی سفارشات'},
    {icon :<IoWalletOutline/> , title:'ارسال رایگان', content:'ارسال رایگان در تمامی سفارشات'},
]

function StoreFeatures(){
    return (
        <div className={classes.storeFeatures}>
            {features.map((feature,index)=><StoreFeatureItem key={index} {...feature}/>)}
        </div>
    )
}

export default StoreFeatures;