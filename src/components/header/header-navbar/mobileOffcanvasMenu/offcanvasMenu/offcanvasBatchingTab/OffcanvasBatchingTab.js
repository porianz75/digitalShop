import OffcanvasTabItemCollapse from "../offcanvasTabItemCollapse/OffcanvasTabItemCollapse";
import classes from './OffcanvasBatchingTab.module.css'

const data =[
    {
        id:1,
        name:'لوازم جانبی و کامپیوتر',
        path:'t1',
        subLink: null,
        isLink:true
    },
    {
        id:2,
        name:'تلفن همراه',
        path:'/t2',
        subLink: null,
        isLink:true
    },
    {
        id:3,
        name:'هدفون',
        path:'/t3',
        subLink: null,
        isLink:true
    },
    {
        id:4,
        name:'تکنولوژی',
        path:'/t4',
        subLink: null,
        isLink:true
    },
    {
        id:5,
        name:'ساعت هوشمند',
        path:'/t5',
        subLink: null,
        isLink:true
    },
    {
        id:6,
        name:'کنسول بازی',
        path:'/t6',
        subLink: null,
        isLink:true
    },
    {
        id:7,
        name:'تخفیف های ویژه',
        path:'/t7',
        subLink: null,
        isLink:true
    },
    {
        id:8,
        name:'تخفیف‌ها و پیشنهادها',
        path:'/t7',
        subLink: null,
        isLink:true
    },
    {
        id:9,
        name:'پرفروش‌ترین‌ها',
        path:'/t8',
        subLink: null,
        isLink:true
    },
    {
        id:10,
        name:'فروشنده شوید!',
        path:'/tp',
        subLink: null,
        isLink:true
    },

]


function OffcanvasBatchingTab(){
    return(
        <ul className={classes.batchingTab}>
            {data.map(item=> <OffcanvasTabItemCollapse
                key={item.id} item={item}
            />)}
        </ul>
    )
}
export default OffcanvasBatchingTab;