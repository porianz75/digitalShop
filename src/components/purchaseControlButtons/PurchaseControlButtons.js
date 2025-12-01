import Classes from './PurchaseControlButtons.module.css';
import {MdDelete} from "react-icons/md";
import {HiOutlineMinusSm, HiPlus} from "react-icons/hi";
import Spinner from "../ui/spinner/Spinner";
import Button from "../ui/button/Button";
import {useState} from "react";
import {
    getAllBaskets,
    getBasketLoading,
    updateBaskets as updateBasketsAction
} from "../../store/basketsSlice";
import {useDispatch, useSelector} from "react-redux";


function PurchaseControlButtons({currentProductInBasket,productId,product}){
    const [isLoading,setIsLoading]=useState(false);
    const dispatch = useDispatch();

    const baskets = useSelector(getAllBaskets)
    const basketLoading = useSelector(getBasketLoading)

    const addProductToBaskets = async () => {
        setIsLoading(true)
        try {
            if (currentProductInBasket) {
                let indexExistProduct = baskets.findIndex(product => product.id === productId);
                let newBaskets = [...baskets]
                let newProduct = {...newBaskets[indexExistProduct]}
                newProduct.count += 1;
                newBaskets[indexExistProduct] = newProduct;

                await dispatch(updateBasketsAction(newBaskets)).unwrap()
            } else {
                let newProduct = {...product}
                newProduct.count = 1;
                await dispatch(updateBasketsAction([...baskets, newProduct])).unwrap()
            }
        }catch (e){
            console.log(e)
        }finally {
            setIsLoading(false)
        }
    }

    const decrementProductCount = async () => {
        if (currentProductInBasket.count < 2) {
            return;
        }
        setIsLoading(true);
        let indexExistProduct = baskets.findIndex(product => product.id === productId);
        let newBaskets = [...baskets]
        let newProduct = {...newBaskets[indexExistProduct]}
        newProduct.count -= 1
        newBaskets[indexExistProduct] = newProduct;
        try {
           await dispatch(updateBasketsAction(newBaskets)).unwrap();
        }catch (e){
            console.log(e)
        }finally {
            setIsLoading(false)

        }
    }


    const removeProductFromBaskets = () => {
        let newBaskets = baskets.filter(product => product.id !== productId)
        dispatch(updateBasketsAction(newBaskets))
    }

    return(
        <div className={Classes.container}>
            {
                currentProductInBasket ? (
                    <div className={Classes.PurchaseControlButtons}>
                        {
                            currentProductInBasket.count < 2 ? (
                                <button className={Classes.removeProductFromBaskets}
                                        onClick={removeProductFromBaskets}>
                                    <MdDelete/>
                                </button>
                            ):(
                                <button onClick={decrementProductCount}>
                                    <HiOutlineMinusSm/>
                                </button>
                            )
                        }

                        <span>{currentProductInBasket.count}</span>

                        <button onClick={addProductToBaskets}>
                            <HiPlus/>
                        </button>
                        {isLoading && <Spinner size='25px'/>}
                    </div>

                ) : (
                    <>
                        <Button clickHandler={addProductToBaskets}
                        disabled={basketLoading}>
                            افزودن به سبد خرید
                        </Button>
                        {isLoading && <Spinner size='25px'/>}
                    </>

                )
            }
        </div>
    )
}

export default PurchaseControlButtons;