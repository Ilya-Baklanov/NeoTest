import { LogoProps } from "./types";
import s from './Logo.module.scss';

const Logo = ({logoName}: LogoProps) => {
    return (
        <a className={s.root}>
            <span className={s.root__name}>
                {logoName}
            </span>
        </a>
    )
}

export default Logo;