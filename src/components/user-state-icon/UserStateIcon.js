import {BiUser} from "react-icons/bi";
import {VscSignIn} from "react-icons/vsc";
import classes from './UserStateIcon.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";

function UserStateIcon({order}) {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            {isLogin ? (
                <Link to='/account'>
                    <div className={order === 'row' ? classes.accountRow : classes.accountColumn}>
                        <BiUser/>
                        <p>{order === 'row' ? 'حساب کاربری' : 'حساب'}</p>
                    </div>
                </Link>
            ) : (
                <Link to='/login'>
                    <div className={order === 'row' ? classes.signInRow : classes.signInColumn}>
                        <VscSignIn/>
                        <p>ورود</p>
                    </div>
                </Link>
            )}

        </>)
}

export default UserStateIcon;