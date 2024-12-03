import './BottomNav.scss';

type Props = {
    children: React.ReactNode;
}

export function BottomNav({children}: Props){
    return (
        <div className={'BottomNav'}>
            <div className={'BottomNavContent'}>
                {children}
            </div>
        </div>
    )
}