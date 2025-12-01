import BannerSlider from "../../components/bannerSlider/BannerSlider";
import StoreFeatures from "../../components/store-features/StoreFeatures";
import SpecialDiscountsBox from "../../components/special-discounts-box/SpecialDiscountsBox";
import ProductsBox from "../../components/products-box/ProductsBox";
import ParallaxBannerBox from "../../components/parallax-banner-box/ParallaxBannerBox";
import CustomersComments from "../../components/customers-comments/CustomersComments";
import BrandSlider from "../../components/brandSlider/BrandSlider";
import Classes from './Home.module.css'
import {useState, useEffect} from "react";
import axios from "../../axios";


function Home() {
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get('/home.json');
                setAllData(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        void getData();
    }, [])
    return (
        <div style={{backgroundColor: '#FCFBFB'}}>
            <div className={Classes.sectionSpace}>
                <BannerSlider data={allData?.bannerSlider}/>
            </div>

            <div className='container'>
                <div className={Classes.sectionSpace}>
                    <StoreFeatures/>
                </div>
                <div className={Classes.sectionSpace}>
                    <SpecialDiscountsBox data={allData?.specialDiscount}/>
                </div>
                <div className={Classes.sectionSpace}>
                    <ProductsBox data={allData?.popular_products}/>
                </div>
                <div className={Classes.sectionSpace}>
                    <ProductsBox data={allData?.popular_laptops}/>
                </div>
                <div className={Classes.sectionSpace}>
                    <ProductsBox data={allData?.popular_sound_appliances}/>
                </div>
                <div className={Classes.sectionSpace}>
                    <ParallaxBannerBox/>
                </div>
                <div className={Classes.sectionSpace}>
                    <ProductsBox data={allData?.best_selling_products}/>
                </div>
            </div>


            <div style={{backgroundColor: '#fff', marginBottom: '60px'}}>
                <div className='container'>
                    <div className={Classes.customersComments}>
                        <CustomersComments comments={allData?.customer_comment}/>
                    </div>
                    <div className={Classes.brandSlider}>
                        <BrandSlider/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;