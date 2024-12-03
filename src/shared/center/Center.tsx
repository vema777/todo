import './Center.scss';

type Props = {
    children: React.ReactNode
}

/**
 * zentriert ein ELement.
 * @param children
 * @constructor
 */
export function Center({children}: Props){
    return (
        <div className="Center">
            {children}
        </div>
    )
}