import style from './SkillsItem.module.css';

interface skillsItemProps {
    itemData: string[]
}

export default function SkillsItem({itemData} : skillsItemProps) {

    function skillColor(skill:string) {
        
        if(skill === 'JavaScript') {
            return {backgroundColor: 'yellow'}
        } else if (skill === 'React') {
            return {backgroundColor: 'lightBlue'}
        } else if (skill === 'HTML & CSS') {
            return {backgroundColor: 'orange'}
        } else if (skill === 'TypeScript') {
            return {backgroundColor: 'blue'}
        } else if (skill === 'Next JS') {
            return {backgroundColor: 'lightGray'}
        } else {
            return {backgroundColor: 'red'}
        }

    }

    return (
        <>
            {itemData.map((x,i) => {return(
                <span style={skillColor(x)} className={style.skillItem} key={i}>{x}</span>
            )})}
        </>
        
    )

}