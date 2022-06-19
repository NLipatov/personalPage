import "./Declarator.css";

const Declarator = ({DeclaratorValue, DeclaratorName="My", ReverseDeclaration=false}) => {
    return(
        ReverseDeclaration ?(
            <div className="declaratorRow">
            <span></span>
            <span>{DeclaratorName}</span>
            <span>{DeclaratorValue}</span>
        </div>
        ) :
        (
            <div className="declaratorRow">
            <span>{DeclaratorName}</span>
            <span>{DeclaratorValue}</span>
        </div>
        )
    )
}

export default Declarator;