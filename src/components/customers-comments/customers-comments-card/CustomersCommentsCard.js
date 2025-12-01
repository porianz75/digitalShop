import Classes from './CustomersCommentsCard.module.css';
import { Rating } from 'react-simple-star-rating'

function CustomersCommentsCard({comment}){
    return(
        <div className={Classes.container}>
            <img className={Classes.userImage} src={comment.imageSrc} alt={comment.alt}/>
            <div className={Classes.title}>
                <p className={Classes.userName}>{comment.user_name}</p>
                <Rating
                    initialValue={comment.rating}
                    rtl
                    allowFraction
                    readonly
                    SVGclassName={Classes.ratingStar}
                />
            </div>
            <p className={Classes.content}>{comment.user_comment}</p>
        </div>
    )
}
export default CustomersCommentsCard;