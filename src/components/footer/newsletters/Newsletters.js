import Classes from './Newsletters.module.css';
import {ImArrowLeft2} from 'react-icons/im'

function Newsletters(){
    return(
        <div className={Classes.newsletters}>
            <div className='container'>
                <div className={Classes.bgContainer}>
                    <h4 className={Classes.title}>برای خبرنامه ثبت نام کنید</h4>
                    <h1 className={Classes.subTitle}>در خرید بعدی 30 درصد تخفیف بگیرید</h1>
                    <form>
                        <div className={Classes.formControl}>
                            <input type='email' placeholder='آدرس ایمیل شما'/>
                            <button type='submit' className={Classes.btnSubmit}>
                                <ImArrowLeft2/>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Newsletters;