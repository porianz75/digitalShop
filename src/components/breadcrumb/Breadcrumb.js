import Classes from './Breadcrumb.module.css';
import {Link} from 'react-router-dom'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
// [
//     {id:1,title: 'خانه' , to:'/'},
//     {id:2,title: 'دیجیتال' , to:'/product-category/digital'},
//     {id:3,title: 'لپ تاپ 13 اینچی اپل مدل MacBook Pro MYD82 2020 همراه با تاچ بار' , to:'/product/laptop-1/لپ تاپ 13 اینچی اپل مدل MacBook Pro MYD82 2020 همراه با تاچ بار'},
// ]
function Breadcrumb({links}){

    return (
        <div className={Classes.breadCrumb}>
            <ul className={Classes.breadCrumbList}>
                {links.map(link =>(
                    link.id === links.length ? (
                        <li className={Classes.breadCrumbListItem} key={link.id}>{link.title}</li>
                    ) : (
                        <li className={Classes.breadCrumbListItem} key={link.id}>
                            <Link to={link.to}>{link.title}</Link>
                            <MdOutlineKeyboardArrowLeft/>
                        </li>
                    )
                ))}
            </ul>

        </div>
    )
}

export default Breadcrumb;