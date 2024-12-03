import './Card.scss';

type Props = {
    children: React.ReactNode;
}

/**
 * Card Komponent
 * @param children
 * @constructor
 */
export function Card({children} : Props){
    return (
        <div className="Card">
            {children}
        </div>
    )
}