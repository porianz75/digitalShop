import Classes from './SingleProductInformation.module.css'
import ProductFeatureTable from "./productFeatureTable/ProductFeatureTable";
import ProductComment from "./productComment/ProductComment";
import ProductSellerInfo from "./productSellerInfo/ProductSellerInfo";
import ProductDescription from "./productDescription/ProductDescription";



function SingleProductInformation({product,activeTab,setActiveTab}) {

    let activeTabComponent = null;

    switch (activeTab) {
        case 'description' : {
            activeTabComponent = <ProductDescription/>
            break;
        }
        case 'featureTable' : {
            activeTabComponent = <ProductFeatureTable/>
            break;
        }
        case 'comments' : {
            activeTabComponent = <ProductComment/>
            break;
        }
        // case 'SellerInfo' : {
        //     activeTabComponent = <ProductSellerInfo/>
        //     break;
        // }
        default:
            break
    }

    return (
        <div className={Classes.singleProductInformation}>
            <div className='container'>
 {/*       --------------     start desktop detail product    -------------      */}
                <div className={Classes.desktopDetailProduct}>
                    <ul className={Classes.tabContainer}>
                        <li className={activeTab === 'description' ? Classes.activeTabItem : null}
                            onClick={() => setActiveTab('description')}>
                            توضیحات
                        </li>
                        <li className={activeTab === 'featureTable' ? Classes.activeTabItem : null}
                            onClick={() => setActiveTab('featureTable')}>
                            توضیحات تکمیلی
                        </li>
                        <li id='comments' className={activeTab === 'comments' ? Classes.activeTabItem : null}
                            onClick={() => setActiveTab('comments')}>
                            {`نظرات(${product.comment_count})`}
                        </li>
                        {/*<li className={activeTab === 'SellerInfo' ? Classes.activeTabItem : null}*/}
                        {/*    onClick={() => setActiveTab('SellerInfo')}>*/}
                        {/*    اطلاعات فروشنده*/}
                        {/*</li>*/}
                    </ul>
                    {activeTabComponent}
                </div>
 {/*       --------------     end desktop detail product    -------------      */}

            </div>
        </div>
    )
}

export default SingleProductInformation;