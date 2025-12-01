import { RiSearchLine } from "react-icons/ri";
import classes from './SearchBox.module.css'
function SearchBox(){
    return (
        <div className={classes.searchContainer}>
            <input type='text' placeholder='جستجوی محصولات ...'/>
            <RiSearchLine className={classes.searchIcon}/>
        </div>
    )
}

export default SearchBox;