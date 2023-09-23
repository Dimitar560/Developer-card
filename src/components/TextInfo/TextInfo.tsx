import style from './TextInfo.module.css';

type textProps = {
    devName: string
    devDesc: string
};

export default function TextInfo({devName, devDesc} : textProps) {

    return (
        <div className={style.textInfoArea}>
            <h3>{devName}</h3>
            <span>{devDesc}</span>
        </div>
    )

}