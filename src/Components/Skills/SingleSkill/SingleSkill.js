import "./SingleSkill.css";

const SingleSkill = ({SkillObject}) => {
    const {name, percentage} = SkillObject;
    return(
        <div className="skillItem">
            <span className="skillName">{name}</span>
            <div className="progressbar">
                <div className="progress" style={{"width": `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default SingleSkill;