import {Outlet} from "react-router-dom";
import './Layout.scss';
import {BottomNav} from "../shared/bottomNav/BottomNav";
import {AppHeader} from "../shared/appHeader/AppHeader";
import {FabButton} from "../shared/fabButton/FabButton";
import {Avatar} from "../shared/avatar/Avatar";
import {
    HiOutlineHomeModern,
    HiOutlineInbox,
    HiOutlineCalendar,
    HiOutlineCog6Tooth,
    HiOutlineBell,
    HiOutlinePlus,
} from "react-icons/hi2";

export function Layout() {
    return (
        <div>
            <AppHeader>
                <button>
                    <Avatar height={'35'} width={'35'}>
                        <p>P</p>
                    </Avatar>
                </button>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <FabButton className={'AddButton'}>
                        <HiOutlinePlus/>
                    </FabButton>
                    <FabButton className={'BgWhite'}>
                        <HiOutlineBell/>
                    </FabButton>
                </div>
            </AppHeader>
            <main className={'MainBody'} style={{paddingTop: '60px'}}>
                <div className={'MainBodyContent'}>
                    <Outlet/>
                </div>
            </main>
            <BottomNav>
                <FabButton>
                    <HiOutlineHomeModern/>
                </FabButton>
                <FabButton>
                    <HiOutlineInbox/>
                </FabButton>
                <FabButton>
                    <HiOutlineCalendar/>
                </FabButton>
                <FabButton>
                    <HiOutlineCog6Tooth/>
                </FabButton>
            </BottomNav>
        </div>
    )
}