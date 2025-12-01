import {useState, useRef, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {FaChevronDown} from "react-icons/fa";
import Classes from './OffcanvasTabItemCollapse.module.css'

function OffcanvasTabItemCollapse({item}) {
    const [isOpen, setIsOpen] = useState(false);
    const collapseItemRef = useRef(null);
    const ulElementHeight = useRef('');


    useEffect(() => {
        ulElementHeight.current = collapseItemRef.current.offsetHeight + 'px'
    })

    const handleClick = (e) => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <li className={Classes.tabItem}>
            <div className={Classes.tabTitle}>
                {item.isLink ? (
                    <NavLink to={item.path}
                             className={({isActive}) => isActive ? Classes.active : null}
                    >{item.name}
                    </NavLink>
                ) : (
                    <span>{item.name}</span>
                )}

                {item.subLink && (
                    <button className={Classes.BtnCollapse} onClick={handleClick}>
                        <FaChevronDown className={Classes.iconCollapse}/>
                    </button>
                )}
            </div>
            <div className={Classes.collapseContainer}
                 style={isOpen ? {height: ulElementHeight.current} : null}
            >
                <ul
                    ref={collapseItemRef}
                    className={Classes.collapseItem}
                >

                    {item.subLink?.map((value) => (
                        <li key={value.id}>
                            <NavLink to={value.path}>{value.subLinkName}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </li>
    )
}

export default OffcanvasTabItemCollapse;


