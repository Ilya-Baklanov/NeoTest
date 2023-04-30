import s from './Card.module.scss';

type CardProps = {
    title: string;
}

const Card = ({title}: CardProps) => {
    return (
        <div className={s.root}>
            {title}
        </div>
    )
}

export default Card;