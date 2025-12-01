import OffcanvasTabItemCollapse from "../offcanvasTabItemCollapse/OffcanvasTabItemCollapse";
import classes from './OffcanvasMainTab.module.css'

const data =[
    {
        id:1,
        name:'صفحه اصلی',
        path:'/',
        subLink: null,
        isLink:true
    },
    {
        id:2,
        name:'فروشگاه',
        path:'/',
        subLink:[
            {id:1, subLinkName:'محصول گروهی هوشمند', path:'/p1'},
            {id:2, subLinkName:'محصول ساده', path:'/p2'},
            {id:3, subLinkName:'محصول متغییر', path:'/p3'},
            {id:4, subLinkName:'محصول ناموجود', path:'/p4'},
            {id:5, subLinkName:'محصول گروهی', path:'/p5'},
            {id:6, subLinkName:'محصول خارجی / بازاریابی', path:'/p6'},
        ],
        isLink:true
    },
    {
        id:3,
        name:'فروشندگان دکان',
        path:'/p6',
        subLink:[
            {id:1, subLinkName:'لیست فروشگاه', path:'/p7'},
            {id:2, subLinkName:'جزئیات فروشگاه', path:'/p8'},
        ],
        isLink:false
    },
    {
        id:4,
        name:'برگه ها',
        path:'/p9',
        subLink:[
            {id:1, subLinkName:'درباره ما', path:'/p10'},
            {id:2, subLinkName:'سوالات متداول', path:'/p11'},
            {id:3, subLinkName:'لیست علاقه مندی ها', path:'/p12'},
            {id:4, subLinkName:'محتوا', path:'/p13'},
        ],
        isLink: false
    },
    {
        id:5,
        name:'وبلاگ',
        path:'/p14',
        subLink:[
            {id:1, subLinkName:'وبلاگ', path:'/p15'},
            {id:2, subLinkName:'نوشته وبلاگ', path:'/p16'},
        ],
        isLink: false
    },
    {
        id:6,
        name:'درباره ما',
        path:'/p14',
        subLink:null,
        isLink: true
    },
]

function OffcanvasMainTab(){
    return(
        <ul className={classes.mainTab}>
            {data.map(item=> <OffcanvasTabItemCollapse
            key={item.id} item={item}
            />)}
        </ul>
    )
}

export default OffcanvasMainTab;