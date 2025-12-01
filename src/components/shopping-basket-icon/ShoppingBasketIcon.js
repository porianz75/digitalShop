import {AiOutlineShoppingCart} from "react-icons/ai";
import Classes from './ShoppingBasketIcon.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getBasketsState} from "../../store/basketsSlice";
import DropDown from "../ui/dropDown/DropDown";
import {RiArrowLeftSLine} from 'react-icons/ri'
import Button from "../ui/button/Button";
import PurchaseControlButtons from "../purchaseControlButtons/PurchaseControlButtons";

function ShoppingBasketIcon({order}) {

    const basketsState = useSelector(getBasketsState)

    return (

        <div className={order === 'row' ? `${Classes.shoppingBasketRow} dropDown` : Classes.shoppingBasketColumn}>
            <Link to='/shoppingBasket'>
                <div className={Classes.iconContainer}>
                    <AiOutlineShoppingCart className={Classes.basketIcon}/>
                    <span className={Classes.basketCount}>{basketsState.total_count}</span>
                </div>
            </Link>
            {order === 'row' ? (
                <div>
                    <p className={Classes.amountTitle}>جمع</p>
                    <p className={Classes.amountValue}>{basketsState.total_price.toLocaleString()}</p>
                </div>
            ) : (
                <p className={Classes.titleColumn}>سبد خرید</p>
            )}

            <DropDown style={{width: '450px'}} openDirection='right'>
                <div className={Classes.summaryBasketBoxContainer}>

                    <div className={Classes.summaryBasketBoxHeader}>
                        <p>{`${basketsState.total_count} کالا`}</p>
                        <Link to='/shoppingBasket'>
                            <span>
                                مشاهده ی  سبد خرید
                            </span>
                            <RiArrowLeftSLine/>
                        </Link>
                    </div>

                    <div className={Classes.summaryBasketBoxBody}>
                        {
                            basketsState.baskets.length === 0 ? (
                                <div className={Classes.emptyBasket}>
                                    <img src='/images/empty-cart.svg' alt='basket is empty'/>
                                    <p>سبد خرید شما خالی میباشد</p>
                                </div>
                            ) : (
                                basketsState.baskets.map(product => (
                                    <div key={product.id} className={Classes.SSB_bodyItem}>
                                        <div className={Classes.SSB_bodyRightSection}>

                                            <Link to={`/product/${product.id}/${product.title}`}>
                                                <img src={product.imgSrc} alt={product.title}/>
                                            </Link>

                                            <PurchaseControlButtons
                                                currentProductInBasket={product}
                                                productId={product.id}
                                            />
                                        </div>
                                        <div className={Classes.SSB_bodyLeftSection}>
                                            <h5>{product.title}</h5>
                                            <p>{`${(product.rrp_price * product.count).toLocaleString()} تومان`}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        }

                    </div>

                    <div className={Classes.summaryBasketBoxFooter}>
                        <div className={Classes.SBB_FooterText}>
                            <p>مبلغ قابل پرداخت</p>
                            <p>{`${basketsState.total_price.toLocaleString()} تومان`}</p>
                        </div>
                        <Button>
                            ورود و ثبت سفارش
                        </Button>
                    </div>
                </div>
            </DropDown>
        </div>

    )
}

export default ShoppingBasketIcon;