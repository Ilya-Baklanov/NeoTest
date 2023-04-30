import s from './Header.module.scss';
import { Basket, Heart } from '../../assets/iconcs/index';
import Logo from '../../ui/logo/Logo';
import Indicator from '../../ui/indicator/Indicator';

const Header = () => {
    return (
        <div className={s.root}>
            <Logo logoName='QPICK' />
            <div className={s.root__nav}>
                <div className={s.root__nav_favorites}>
                    <Heart />
                    <div className={s.root__nav_favorites_indicator}>
                        <Indicator counter={6} />
                    </div>
                </div>
                <div className={s.root__nav_basket}>
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Header;
