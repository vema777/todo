import './FabButton.scss';
import React from "react";

type Props = {
    selected?: boolean;
    children: React.ReactNode;
    height?: string;
    width?: string;
    className?: string;
}

export function FabButton({selected, children, height = '39', width = '39', className} : Props) {
    return (
        <button style={{height: `${height}px`, width: `${width}px` }} className={`FabButton ${selected ?  'Selected' : ''} ${className} `}>
            {children}
        </button>
    );
}