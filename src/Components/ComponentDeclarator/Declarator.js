import "./Declarator.css";

const Declarator = ({DeclaratorValue}) => {
    return(
        <div className="declaratorRow">
            <span>My</span>
            <span>{DeclaratorValue}</span>
        </div>
    )
}

export default Declarator;