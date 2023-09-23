import Avatar from '../Avatar/Avatar';
import SkillsList from '../Skills/SkillsList/SkillsList';
import TextInfo from '../TextInfo/TextInfo';
import style from './CardFrame.module.css';

export default function CardFrame() {

    const longText = 'JavaScript and React developer working from Bulgaria with 1 year of profesional experiance in software development. And newfound knowlage in TypeScript'

    const skillList = ['JavaScript','TypeScript','HTML & CSS','Next JS','Python','React'];

    return (
        <main>
            <div className={style.frame}>
                <Avatar imageName={'ME'} imagePath={'AvatarImage.jpg'}/>
                <TextInfo devName={'Dimitar Chavdarov'} devDesc={longText} />
                <SkillsList itemData={skillList} />
            </div>
        </main>
    )

}