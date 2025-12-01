import {useLayoutEffect, useState} from "react";
import Modal from "../components/ui/modal/Modal";
import axios from "../axios";
import {AiFillWarning} from 'react-icons/ai'
function withNetWorkErrorHandler(WrappedComponent) {
    return (props) => {

        const [error, setError] = useState(null);


        useLayoutEffect(()=>{
            let axiosRes = axios.interceptors.response.use(res => res,  error => {
                if (error.code === 'ERR_NETWORK') {
                            setError('لطفا اتصال خود به اینترنت و vpn را بررسی نمائید و دوباره تلاش کنید.')
                        } else if(error.response.status >= 500) {
                            setError('سرور به مشکل خورده است لطفا بعدا تلاش کنید.')
                }
                 return Promise.reject(error)
            });

            return ()=> {
                axios.interceptors.response.eject(axiosRes);
            }
        },[])

        return(
            <>
                <WrappedComponent {...props}/>
                <Modal
                    show={error}
                    onClose={() => setError(null)}
                >
                    <div className='errorBox'>
                        <p>
                            <AiFillWarning style={{color:'#a2a21a',marginInlineStart:'4px',fontSize:'24px',verticalAlign:'sub'}}/>
                            <strong>مشکل در برقراری ارتباط</strong>
                            <AiFillWarning style={{color:'#a2a21a',marginInlineStart:'4px',fontSize:'24px',verticalAlign:'sub'}}/>
                        </p>
                        <br/>
                        <p className='errorMessage'>{error}</p>
                    </div>
                </Modal>
            </>
        )
    }
}

export default withNetWorkErrorHandler;