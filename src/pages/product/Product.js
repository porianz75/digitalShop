import Classes from './Product.module.css';
import {useParams,Link,useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "../../axios";
import ProductGalleryImages from "../../components/product-gallery-images/ProductGalleryImages";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import {Rating} from 'react-simple-star-rating'
import CountDown from "../../components/countDown/CountDown";
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineHeart, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import {FiRefreshCw} from 'react-icons/fi';
import SingleProductInformation from "../../components/singleProductInformation/SingleProductInformation";
import PurchaseControlButtons from "../../components/purchaseControlButtons/PurchaseControlButtons";
import {useSelector} from "react-redux";
import {getProductByIdFromBaskets} from "../../store/basketsSlice";


// const data = {
//     id: "pc-1",
//     category: "pc",
//     title: "کامپیوتر همه کاره 24 اینچی اپل مدل iMac-E 2021",
//     description: "",
//     selling_price: 38000000,
//     rrp_price: 37000000,
//     off: 2,
//     imgSrc: "images/product/pc-1_imac3.jpg",
//     remaining_in_stock: 0,
//     timer: 6000,
//     comment_count: 3,
//     rating: 3.4,
//     page_breadCrumb: [],
//     product_breadCrumb: [
//         {
//             title: "برند", items: [
//                 {des: "اپل", url: "/product-category/appel"}
//             ]
//         },
//         {
//             title: "دسته بندی ها", items: [
//                 {des: "لپ تاپ", url: "/product-category/laptop"},
//                 {des: 'دیجیتال', url: "/product-category/digital"}
//             ]
//         },
//     ],
//     images: [
//         {
//             url: "/images/product/pc-1_imac4.jpg"
//         },
//         {
//             url: "/images/product/pc-1_imac2.jpg"
//         },
//         {
//             url: "/images/product/pc-1_imac1.jpg"
//         },
//         {
//             url: "/images/product/pc-1_imac.jpg"
//         },
//         {
//             url: "/images/product/pc-1_imac3.jpg"
//         }
//     ],
//     reaction: true
// }
//

function Product() {

    const [product, setProduct] = useState(null)
    const [isProductLoading, setIsProductLoading] = useState(true)
    const {productId} = useParams()

    const currentProductInBasket = useSelector((state) => getProductByIdFromBaskets(state, productId));

// active tab for singleProductInformation component
    const [activeTab, setActiveTab] = useState('description');

    const navigate = useNavigate();

    useEffect(() => {
        const getProductData = async () => {
            try {
                const response = await axios(`/getOneProduct/${productId}.json`)
                setProduct(response.data);
                setIsProductLoading(false)
            } catch (e) {
                setIsProductLoading(false)
                if(e.response.status === 404){
                    navigate('/*')
                }
            }
        }
        void getProductData();

    }, [productId])


    if (isProductLoading) return <h1>loading</h1>

    return (
        <>
            {/* ----------------------  start page breadCrumb ------------------------*/}
            <div style={{backgroundColor: '#EFF5F8'}}>
                <div className='container'>
                    <Breadcrumb links={product.page_breadCrumb}/>
                </div>
            </div>
            {/* ----------------------  end page breadCrumb ------------------------*/}


            <div className='container'>
                <div className={Classes.productDetailsContainer}>

                    {/* ------------------------------- start mobile title and  product breadCrumb ------------------------------- */}
                    <div className={Classes.mobileProductTitle}>
                        <h1 className={Classes.productTitle}>{product.title}</h1>
                        <ul className={Classes.productBreadCrumbList}>
                            {product.product_breadCrumb.map((breadCrumb, index) => (
                                <li key={index}>
                                    <span className={Classes.productBreadCrumbTitle}> {breadCrumb.title}: </span>
                                    {breadCrumb.items.map((item, index) => (
                                        <Link key={index} to={item.url} className={Classes.productBreadCrumbLink}>
                                            {item.des}
                                        </Link>
                                    ))}
                                </li>
                            ))}
                            {product.remaining_in_stock !== 0 && (
                                <li>
                                    <span className={Classes.productBreadCrumbTitle}>دسترسی:</span>
                                    <span className={Classes.productBreadCrumbLink}>
                                        {` ${product.remaining_in_stock} در انبار`}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/* ------------------------------- end mobile title and  product breadCrumb -------------------------------------- */}


                    {/*   ------------------------------- start image gallery and slider ---------------- */}
                    <div className={Classes.productDetailRight}>
                        <ProductGalleryImages product={product}/>
                    </div>
                    {/*    ----------------------------- end image gallery and slider ------------------- */}


                    <div className={Classes.productDetailLeft}>
                        {/* ------------------------------- start deskTop title and  product breadCrumb ------------------------------- */}
                        <div className={Classes.deskTopProductTitle}>
                            <h1 className={Classes.productTitle}>{product.title}</h1>
                            <ul className={Classes.productBreadCrumbList}>
                                {product.product_breadCrumb.map((breadCrumb, index) => (
                                    <li key={index}>
                                        <span className={Classes.productBreadCrumbTitle}> {breadCrumb.title}: </span>
                                        {breadCrumb.items.map((item, index) => (
                                            <Link key={index} to={item.url} className={Classes.productBreadCrumbLink}>
                                                {item.des}
                                            </Link>
                                        ))}
                                    </li>
                                ))}
                                {product.remaining_in_stock !== 0 && (
                                    <li>
                                        <span className={Classes.productBreadCrumbTitle}>دسترسی:</span>
                                        <span
                                            className={Classes.productBreadCrumbLink}>{` ${product.remaining_in_stock} در انبار`}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* ------------------------------- start deskTop title and product breadCrumb ------------------------------- */}


                        <div className={Classes.ratingContainer}>
                            <Rating
                                size={25}
                                readonly
                                rtl
                                initialValue={product.rating}
                                allowFraction
                            />
                            {product.comment_count !== 0 ?
                                (<a href='#comments' onClick={()=>setActiveTab('comments')}
                                    className={Classes.ratingLink}>{`(دیدگاه ${product.comment_count} کاربر) `}</a>)
                                :
                                (<span className={Classes.ratingText}>(هنوز هیچ دیدگاهی برای این محصول ثبت نشده)</span>)
                            }
                        </div>

                        {product.remaining_in_stock === 0 && (
                            <p className={Classes.notExisting}>در حال حاضر این محصول در انبار موجود نیست و در دسترس نمی
                                باشد.
                            </p>
                        )}

                        {
                            product.timer > 0 && product.remaining_in_stock !== 0 && (
                                <>
                                    <p className={Classes.countDownText}>تا پایان پیشنهاد باقی می ماند</p>
                                    <CountDown timeLeft={product.timer}
                                               timerBoxStyle={{backgroundColor: '#EFF5F8'}}
                                               containerStyle={{justifyContent: 'end'}}
                                    />
                                </>
                            )
                        }
                        {/* ------------------------------- start  price container and  controls buy basket ---------------------------- */}
                        {
                            product.remaining_in_stock !== 0 && (
                                <>
                                    <div className={Classes.priceContainer}>
                                        {
                                            product.off !== 0 && (
                                                <span>
                                                   {product.rrp_price.toLocaleString()}
                                                    تومان
                                               </span>)
                                        }
                                        <span
                                            className={`${Classes.sellingPrice} ${product.off !== 0 && Classes.discounted}`}
                                        >
                                               {product.selling_price.toLocaleString()} تومان
                                        </span>
                                    </div>

                                    <div className={Classes.productControlsBtn}>

                                        <PurchaseControlButtons
                                            currentProductInBasket={currentProductInBasket}
                                            productId={productId}
                                            product={product}/>

                                        <div className={Classes.actionBox}>
                                            <button className={Classes.actionBoxBtn}>
                                                <FiRefreshCw/>
                                            </button>
                                            <button className={Classes.actionBoxBtn}>
                                                <AiOutlineHeart/>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {/* ------------------------------- end  price container and  controls buy basket ---------------------------- */}

                        <div className={Classes.divider}></div>

                        {/* ------------------------------- start  social icons --------------------------------- */}
                        <div className={Classes.socialShare}>
                            <a href={`http://www.facebook.com/sharer.php?u=https://${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
                               target="_blank"
                               rel="noreferrer"
                            >
                                <AiFillFacebook className={[Classes.socialIcon, Classes.facebookIcon].join(' ')}/>
                            </a>
                            <a href={`http://twitter.com/home?status=${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
                               target="_blank"
                               rel="noreferrer"
                            >
                                <AiOutlineTwitter className={[Classes.socialIcon, Classes.twitterIcon].join(' ')}/>
                            </a>
                            <a href={`http://linkedin.com/shareArticle?mini=true&url=${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
                               target="_blank"
                               rel="noreferrer"
                            >
                                <AiFillLinkedin className={[Classes.socialIcon, Classes.linkedinIcon].join(' ')}/>
                            </a>
                            <a href={`mailto:?subject=${product.title}&body=${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
                               target="_blank"
                               rel="noreferrer"
                            >
                                <HiOutlineMail className={[Classes.socialIcon, Classes.mailIcon].join(' ')}/>
                            </a>
                        </div>
                        {/* ------------------------------- end  social icons --------------------------------- */}
                    </div>
                </div>
            </div>

            <SingleProductInformation product={product} activeTab={activeTab} setActiveTab={setActiveTab}/>

            <div className='container'>
                part 4

            </div>
        </>
    )
}

export default Product;