import './AppHeader.scss';

type Props = {
    children: React.ReactNode;
}

export function AppHeader({children}: Props){
    return (
        <header className={'AppHeader'}>
            <div className={'AppHeaderContent'}>
                {children}
            </div>
        </header>
    )
}