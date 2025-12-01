import Button from "../components/ui/button/Button";
import {useNavigate} from 'react-router-dom'

function NotFound(){
    const navigate = useNavigate();
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:'20px',paddingBottom:'60px'}}>
            <h1 style={{marginBottom:'14px'}}>
                صفحه یافت نشد!
            </h1>
            <Button onClick={()=>navigate('/')} style={{marginBottom:'8px'}}>برگشت به صفحه اصلی</Button>
            <div style={{width:'50%',height:'50%'}}>
                <img src='/images/404-image.png' alt='پیدا نشد'
                style={{width:'100%',height:'100%'}}
                />
            </div>
        </div>
    )
}
export default NotFound;