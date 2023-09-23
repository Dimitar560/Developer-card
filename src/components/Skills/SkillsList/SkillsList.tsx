import style from './SkillsList.module.css';

import SkillsItem from '../SkillsItem/SkillsItem';

interface skillsItemProps {
    itemData: string[]
}

export default function SkillsList({itemData} : skillsItemProps) {

    return (
        <>
            <section className={style.skillsContainer}>
                <SkillsItem itemData={itemData} />
            </section>
        </>
        
    )

}