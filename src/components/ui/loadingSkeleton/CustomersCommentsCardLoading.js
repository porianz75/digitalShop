import Skeleton from "react-loading-skeleton";
import Classes from '../../customers-comments/customers-comments-card/CustomersCommentsCard.module.css';

function CustomersCommentsCardLoading(){
    return(
        <div className={Classes.container}>
            <Skeleton className={Classes.userImage}/>
            <div className={Classes.title}>
                <Skeleton width={80} className={Classes.userName}/>
                <div  style={{display:'flex'}}>
                <Skeleton  width={22} height={22} style={{marginInlineEnd:'6px'}}/>
                <Skeleton  width={22} height={22} style={{marginInlineEnd:'6px'}}/>
                <Skeleton  width={22} height={22} style={{marginInlineEnd:'6px'}}/>
                <Skeleton  width={22} height={22} style={{marginInlineEnd:'6px'}}/>
                <Skeleton  width={22} height={22} style={{marginInlineEnd:'6px'}}/>
                </div>
            </div>
            <Skeleton className={Classes.content} count={4}/>
        </div>
    )
}
export default CustomersCommentsCardLoading;
