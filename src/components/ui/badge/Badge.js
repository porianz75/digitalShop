import Classes from './Badge.module.css';

function Badge({children,style}){

   return (
       <span className={Classes.badge}
             style={style}
       >
           {children}
       </span>
   )
}

export default Badge;