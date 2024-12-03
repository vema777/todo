
import './Avatar.scss';
import React from "react";

type Props = {
    height?: string;
    width?: string;
    children:React.ReactNode;
}
export function Avatar({children, height = '39', width = '39'} : Props){
    return (
        <div style={{ height: `${height}px`, width: `${width}px` }} className={'Avatar'}>
            {children}
        </div>
    )
}