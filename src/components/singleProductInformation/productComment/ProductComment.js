import {Rating} from 'react-simple-star-rating'
import Classes from './ProductComment.module.css'
import Button from "../../ui/button/Button";

let comments = {
    count: 3,
    comments: []
}

function ProductComment() {
    return (
        <>
            <div className={Classes.ScoringSummary}>
                <div className={Classes.totalRatingProduct}>
                    <Rating initialValue={2} allowFraction size={24} rtl readonly emptyColor='#fff' SVGstorkeWidth={1}
                            SVGstrokeColor='#cccccc'/>
                    <p>(نظر 3 مشتری )</p>
                </div>

                <div className={Classes.progressRatingContainer}>
                    <div className={Classes.progressRatingItem}>
                        <Rating initialValue={2} allowFraction size={20} rtl readonly emptyColor='#fff'
                                SVGstorkeWidth={1} SVGstrokeColor='#cccccc'/>
                        <div className={Classes.progress}>
                            <div className={Classes.progressBar} style={{width: '50%'}}></div>
                        </div>
                        <div className={Classes.progressPercentage}>100%</div>
                    </div>
                    <div className={Classes.progressRatingItem}>
                        <Rating initialValue={2} allowFraction size={20} rtl readonly emptyColor='#fff'
                                SVGstorkeWidth={1} SVGstrokeColor='#cccccc'/>
                        <div className={Classes.progress}>
                            <div className={Classes.progressBar} style={{width: '50%'}}></div>
                        </div>
                        <div className={Classes.progressPercentage}>100%</div>
                    </div>
                    <div className={Classes.progressRatingItem}>
                        <Rating initialValue={2} allowFraction size={20} rtl readonly emptyColor='#fff'
                                SVGstorkeWidth={1} SVGstrokeColor='#cccccc'/>
                        <div className={Classes.progress}>
                            <div className={Classes.progressBar} style={{width: '50%'}}></div>
                        </div>
                        <div className={Classes.progressPercentage}>100%</div>
                    </div>
                    <div className={Classes.progressRatingItem}>
                        <Rating initialValue={2} allowFraction size={20} rtl readonly emptyColor='#fff'
                                SVGstorkeWidth={1} SVGstrokeColor='#cccccc'/>
                        <div className={Classes.progress}>
                            <div className={Classes.progressBar} style={{width: '50%'}}></div>
                        </div>
                        <div className={Classes.progressPercentage}>100%</div>
                    </div>
                    <div className={Classes.progressRatingItem}>
                        <Rating initialValue={2} allowFraction size={20} rtl readonly emptyColor='#fff'
                                SVGstorkeWidth={1} SVGstrokeColor='#cccccc'/>
                        <div className={Classes.progress}>
                            <div className={Classes.progressBar} style={{width: '50%'}}></div>
                        </div>
                        <div className={Classes.progressPercentage}>100%</div>
                    </div>
                </div>

                <div className={Classes.commentLinkWrap}>
                    <a href='#comment' rel="nofollow">یک نظر بنویسید</a>
                </div>
            </div>

            <div className={Classes.commentsSection}>
                <div>
                    {
                        comments.count === 0 ? (
                            <>
                                <h3 className={Classes.commentsTitle}>نظرات</h3>
                                <p className={Classes.emptyComments}>
                                    هنوز هیچ بررسی وجود ندارد.
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className={Classes.commentsTitle}>3 نظر</h3>
                                <div className={Classes.commentsList}>
                                    <div className={Classes.commentItem}>
                                        <img src='/images/comment-image.png' alt='' className={Classes.authorImage}/>
                                        <div>
                                            <div className={Classes.commentInfo}>
                                                <p className={Classes.authorName}>طناز</p>
                                                <p className={Classes.commentDate}>دی 21, 1400</p>
                                            </div>
                                            <Rating initialValue={3} rtl readonly size={15}/>
                                            <p className={Classes.commentText}>
                                                من 6 فوت قد و 220 پوند هستم. این پیراهن به خوبی روی سینه و شانه های من
                                                می آید. تنها گلایه من این است که طولانی است! من دوست دارم پیراهن های یقه
                                                دار بپوشم. این پیراهن کاملاً از قسمت عقب من می گذرد. اگر من آن را با
                                                شورت معمولی می پوشیدم، احتمالاً نمی توانید شورت را اصلاً ببینید – کاملاً
                                                توسط پیراهن پنهان شده است. از نظر طول باید 4 تا 5 اینچ کوتاهتر باشد تا
                                                مناسب من باشد.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={Classes.commentItem}>
                                        <img src='/images/comment-image.png' alt='' className={Classes.authorImage}/>
                                        <div>
                                            <div className={Classes.commentInfo}>
                                                <p className={Classes.authorName}>طناز</p>
                                                <p className={Classes.commentDate}>دی 21, 1400</p>
                                            </div>
                                            <Rating initialValue={3} rtl readonly size={15}/>
                                            <p className={Classes.commentText}>
                                                من 6 فوت قد و 220 پوند هستم. این پیراهن به خوبی روی سینه و شانه های من
                                                می آید. تنها گلایه من این است که طولانی است! من دوست دارم پیراهن های یقه
                                                دار بپوشم. این پیراهن کاملاً از قسمت عقب من می گذرد. اگر من آن را با
                                                شورت معمولی می پوشیدم، احتمالاً نمی توانید شورت را اصلاً ببینید – کاملاً
                                                توسط پیراهن پنهان شده است. از نظر طول باید 4 تا 5 اینچ کوتاهتر باشد تا
                                                مناسب من باشد.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div style={{width:'100%',borderBottom:'1px solid #e2e5eb'}}/>
                    <div id='comment' className={Classes.commentForm}>
                        <h2 className={Classes.commentFormTitle}>شما هم می‌توانید در مورد این کالا نظر بدهید</h2>
                        <div className={Classes.commentFormRating}>
                            <h6>امتیاز شما</h6>
                            <Rating rtl allowFraction size={18}/>
                        </div>
                        <div>
                            <label htmlFor='comment-text' className={Classes.commentTextLabel}>بررسی شما</label>
                            <textarea id='comment-text' className={Classes.commentTextInput}/>
                        </div>
                        <Button style={{fontSize:'16px',paddingBlock:'8px'}}>ارسال</Button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductComment