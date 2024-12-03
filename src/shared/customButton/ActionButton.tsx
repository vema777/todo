import './ActionButton.scss';

type Props = {
    type?: "submit" | "reset" | "button";
    children: React.ReactNode;
}

export function ActionButton({type="submit", children}:Props){
    return (
        <button className={'ActionButton'} type={type}>
            {children}
        </button>
    )
}