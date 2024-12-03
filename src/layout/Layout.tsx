import {Outlet} from "react-router-dom";
import './Layout.scss';
import {BottomNav} from "../shared/bottomNav/BottomNav";
import {AppHeader} from "../shared/appHeader/AppHeader";

export function Layout(){
    return (
        <div>
            <AppHeader>
                <p>user-profile</p>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <p>Add-button</p>
                    <p>notifications</p>
                </div>
            </AppHeader>
            <main className={'MainBody'} style={{paddingTop: '60px'}}>
                <Outlet/>
            </main>
            <BottomNav>
                <p>Home</p>
                <p>inbox</p>
                <p>Kalendar</p>
                <p>Settings</p>
            </BottomNav>
        </div>
    )
}