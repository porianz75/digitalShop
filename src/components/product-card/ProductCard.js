import { Link } from "react-router-dom";
import Badge from "../ui/badge/Badge";
import Classes from "./ProductCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import {
  getAllBaskets,
  getProductByIdFromBaskets,
  updateBaskets as updateBasketsAction,
} from "../../store/basketsSlice";
import { memo, useState } from "react";
import Spinner from "../ui/spinner/Spinner";

function ProductCard({ borderPosition = "outer", product }) {
  const [isLoading, setIsLoading] = useState();

  const dispatch = useDispatch();

  const currentProductInBasket = useSelector(state => getProductByIdFromBaskets(state, product.id));
  const baskets = useSelector(getAllBaskets);

  const addToBaskets = async () => {
    setIsLoading(true);
    try {
      if (currentProductInBasket) {
        let indexExistProduct = baskets.findIndex(product => product.id === product.id);
        let newBaskets = [...baskets];
        let newProduct = { ...newBaskets[indexExistProduct] };
        newProduct.count += 1;
        newBaskets[indexExistProduct] = newProduct;

        await dispatch(updateBasketsAction(newBaskets)).unwrap();
      } else {
        let newProduct = { ...product };
        newProduct.count = 1;
        await dispatch(updateBasketsAction([...baskets, newProduct])).unwrap();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`${Classes.card} ${borderPosition === "outer" ? Classes.productBorder : ""}`}>
      <div
        className={`${Classes.cardImage} 
                             ${borderPosition === "inner" ? Classes.productBorder : ""}
                             ${product.remaining_in_stock === 0 ? Classes.finishedProduct : ""}`}
      >
        <div className={Classes.imgWrapper}>
          <img src={`${process.env.REACT_APP_SUB_DOMAIN}/${product.imgSrc}`} alt={product.title} />
        </div>

        {product.off !== 0 && <Badge style={{ top: "8px", right: "8px" }}>{product.off}%</Badge>}

        {product.remaining_in_stock === 0 ? (
          <>
            <div className={Classes.finishedProductOverlay} />
            <p className={Classes.finishedProductText}>تمام شده</p>
          </>
        ) : (
          <div className={Classes.iconContainer}>
            <div className={Classes.productIcon} onClick={!isLoading && addToBaskets}>
              <AiOutlineShoppingCart />
              {isLoading && <Spinner size="15px" />}
            </div>
            <div className={Classes.productIcon}>
              <BsHeart />
            </div>
            <div className={Classes.productIcon}>
              <HiOutlineEye />
            </div>
          </div>
        )}
      </div>

      <div className={Classes.cardContent}>
        <Link to={`/product/${product.id}/${product.title}`}>
          <h4 className={Classes.cardTitle}>{product.title}</h4>
        </Link>

        <div className={Classes.priceContainer}>
          <span className={`${Classes.sellingPrice} ${product.off !== 0 && Classes.discounted}`}>
            {product.selling_price.toLocaleString()} تومان
          </span>
          {product.off !== 0 && (
            <span className={Classes.rrpPrice}>{product.rrp_price.toLocaleString()} تومان</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
