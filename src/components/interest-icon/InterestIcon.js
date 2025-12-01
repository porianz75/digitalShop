import {BsHeart} from "react-icons/bs";
import classes from './InterestIcon.module.css';
import {Link} from "react-router-dom";

function InterestIcon({order}) {
    return (
        <Link to='/interest'>
            <div className={order === 'row' ? classes.interestContainerRow : classes.interestContainerColumn}>
                <div className={classes.iconContainer}>
                    <BsHeart className={classes.icon}/>
                    <span className={classes.count}>0</span>
                </div>
                {order !== 'row' && <p>علاقه مندی</p>}
            </div>
        </Link>
    )
}

export default InterestIcon;