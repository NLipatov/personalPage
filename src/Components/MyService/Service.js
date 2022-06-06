import "./Service.css";
import React from "react";
import ServiceItem from "./ServiceItem";
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
            icon: backendIcon
        },
        {
            name: "Frontend",
            icon: frontendIcon
        },
        {
            name: "Database Engineering",
            icon: databaseIcon
        },
        {
            name: "DevOps",
            icon: devOpsIcon
        }

    ]
    return (
        <div className="ServiceDiv">
            <div className="ServiceItems">
                {ServiceList.map((service) => {
                    <ServiceItem userIcon={service.icon}/>
                })}
            </div>
        </div>
    )

}

export default Service;