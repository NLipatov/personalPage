import "./Service.css";
import ServiceItem from "./ServiceItem";
import Declarator from "../ComponentDeclarator/Declarator";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    const backendIcon = <FontAwesomeIcon icon={faCode} />
    const frontendIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const databaseIcon = <FontAwesomeIcon icon={faDatabase} />
    const devOpsIcon = <FontAwesomeIcon icon={faServer} />
    const userIcon = <FontAwesomeIcon icon={faUser} style={{fontSize: "21pt" }}/>
    const ServiceList = [
        {
            name: "BackEnd",
            icon: backendIcon,
            description: "I prefer to develop backend using .NET Core technology"
        },
        {
            name: "Frontend",
            icon: frontendIcon,
            description: "JS, TS, React, Angular — anything you want"
        },
        {
            name: "Database Engineering",
            icon: databaseIcon,
            description: "I have hands on experience with PostgreSQL and Entity Framework"
        },
        {
            name: "DevOps",
            icon: devOpsIcon,
            description: "I have a successful experience of using Docker and Linux"
        }

    ]
    return (
        <div className="ServiceDiv">
            <Declarator DeclaratorName="So what can I" DeclaratorValue={"Offer?"}/>
            <div className="ServiceItems">
                {ServiceList.map((service) => 
                    (<ServiceItem 
                        serviceIcon={service.icon} 
                        skillName={service.name}
                        description={service.description}/>)
                )}
            </div>
        </div>
    )
}

export default Service;