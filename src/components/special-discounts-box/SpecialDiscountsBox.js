import CountDown from "../countDown/CountDown";
import Classes from './SpecialDiscountsBox.module.css';
import SpecialDiscountSlider from "./special-discount-slider/SpecialDiscountSlider";
import Skeleton from "react-loading-skeleton";
function SpecialDiscountsBox({data}){
    return(
        <div className={Classes.SpecialDiscountsBox}>
            <span className={Classes.DiscountLabel}>تخفیفات ویژه</span>
            <div  className={Classes.sectionContainer}>
                <h2 className={Classes.title}>پرفروش ترین های هفته</h2>
                <div className={Classes.discountTimer}>
                    <p>پایان در</p>
                    {data ? <CountDown timeLeft={data.timer}/> : (
                        <Skeleton count={4} width={40} height={60} containerClassName={Classes.timerLoading}/>
                    )}
                </div>
            </div>
                <SpecialDiscountSlider products={data?.products}/>
        </div>
    )
}

export default SpecialDiscountsBox;