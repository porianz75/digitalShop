import Classes from './Header-topbar.module.css'
import {FaAngleLeft} from "react-icons/fa";
import {useState} from "react";



const languageArray = [
    {id: 1, languageName: 'فارسی', srcFlag: '/images/languageFlag/fa.png', alt: 'iran'},
    {id: 2, languageName: 'انگلیسی', srcFlag: '/images/languageFlag/fa.png', alt: 'english'}
]

function HeaderTopBar() {
    const [selectItemID, setSelectItemID] = useState(1)
    const [show, setShow] = useState(false)

    const handleShowHide = () => {
        setShow(prevState => !prevState)
    }
    const handleClickItem = (id) => {
        setSelectItemID(id)
        setShow(false)
    }
    return (
        <div className={Classes.topBar}>
            <div className={`${Classes.topBarContainer} container`}>
                <ul className={Classes.topBarRight}>
                    <li><a>پشتیبانی</a></li>
                    <li><a>محصولات ویژه</a></li>
                    <li><a>سوالات متداول</a></li>
                </ul>
                <div className={Classes.topBarLeft}>
                    <button onClick={handleShowHide} className={Classes.btnSelect}>
                        <img src={languageArray[selectItemID - 1].srcFlag} alt={languageArray[selectItemID - 1].alt}/>
                        <span>{languageArray[selectItemID - 1].languageName}</span>
                        <FaAngleLeft style={show && {transform: 'rotate(-90deg)'}}/>

                        <ul className={Classes.dropDown + ' ' + (show && Classes.active)}>
                            {languageArray.map(lang => (
                                <li key={lang.id} onClick={() => handleClickItem(lang.id)}>
                                    <img src={lang.srcFlag} alt={lang.alt}/>
                                    <span>{lang.languageName}</span>
                                </li>
                            ))}
                        </ul>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HeaderTopBar;