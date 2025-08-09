import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export function Button({ 
    variant = 'button',     // Default-Werte
    isPrimary = true,       // Besserer Name als "useStyle"
    action = '/',          
    children,               // Flexibler als "text"
    ...rest                // Andere Props durchreichen
}){
    // Direkt den richtigen Style wählen
    const className = isPrimary ? styles.primary : styles.secondary;
    
    switch(variant) {
        case 'button':
            return (
                <button className={className} type="button" {...rest}>
                    {children}
                </button>
            );
        case 'link':
            return (
                <Link className={className} to={action} {...rest}>
                    {children}
                </Link>
            );
        case 'alink':
            return (
                <a className={className} href={action} {...rest}>
                    {children}
                </a>
            );
        default:
            return null;
    }
}