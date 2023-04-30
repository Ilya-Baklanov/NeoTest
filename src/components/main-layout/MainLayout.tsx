import React from 'react';
import s from './MainLayout.module.scss';
import Header from '../header/Header';

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {


    return (
        <div className={s.root}>
            <div className={s.root__header}>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                footer
            </div>
        </div>
    )
}

export default MainLayout;
