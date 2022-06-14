import "./Declarator.css";

const Declarator = ({DeclaratorValue, DeclaratorName="My"}) => {
    return(
        <div className="declaratorRow">
            <span>{DeclaratorName}</span>
            <span>{DeclaratorValue}</span>
        </div>
    )
}

export default Declarator;