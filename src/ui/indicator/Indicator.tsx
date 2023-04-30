import s from './Indicator.module.scss';

type IndicatorProps = {
    counter: number;
    classes?: {
        root?: string;
    }
}

const Indicator = ({counter, classes}: IndicatorProps) => {
    return (
        <div className={`${s.root}${` ${classes?.root}` || ''}`}>
            {counter}
        </div>
    )
}

export default Indicator;
