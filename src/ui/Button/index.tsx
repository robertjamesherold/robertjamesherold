import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

type ButtonProps = {
    variant?: 'button' | 'link' | 'alink';
    isPrimary?: boolean;
    action?: string;
    text?: string;
    width?: string;
    isCentered?: boolean;
};
export function Button({ 
    variant = 'button',   
    isPrimary = true,      
    action = '/',          
    text,   
    width,
    isCentered,
    ...rest
                  
}: ButtonProps){
    const className = isPrimary ? styles.primary : styles.secondary;
    const margin = isCentered ? 'auto' : undefined;
    switch(variant) {
        case 'button':
            return (
                <button className={className} style={{ width: width, marginInline: margin}} type="button" {...rest}>
                    {text}
                </button>
            );
        case 'link':
            return (
                <Link className={className} style={{ width: width, marginInline: margin}} to={action} {...rest}>
                    {text}
                </Link>
            );
        case 'alink':
            return (
                <a className={className} style={{ width: width, marginInline: margin}} href={action} {...rest}>
                    {text}
                </a>
            );
        default:
            return null;
    }
}