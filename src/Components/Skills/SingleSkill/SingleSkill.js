import "./SingleSkill.css";

const SingleSkill = ({SkillObject, playAnimationAtSkills}) => {
    const {name, id} = SkillObject;

    return(
        <div className="skillItem">
            <span className="skillName">{name}</span>
            <div className="progressbar">
                <div className="progress" id={id}></div>
            </div>
        </div>
    )
}

export default SingleSkill;