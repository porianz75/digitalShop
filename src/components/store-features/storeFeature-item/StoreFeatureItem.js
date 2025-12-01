import classes from "./StoreFeatureItem.module.css";


function StoreFeatureItem({icon,title,content}){
    return(
        <div className={classes.featureItem}>
            {icon}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
export default StoreFeatureItem;