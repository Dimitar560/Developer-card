import style from './Avatar.module.css';

type imageProps = {
    imagePath: string
    imageName: string
}

export default function Avatar({imagePath, imageName} : imageProps) {

    return (
        <img className={style.avatar} src={imagePath} alt={imageName} />
    )

}