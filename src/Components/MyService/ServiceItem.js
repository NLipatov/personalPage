import React from 'react';

const ServiceItem = ({serviceIcon, skillName, description=""}) => {
    return (
        <div className="singleServiceItem">
            <div className="declarationOfService">
                <span>{skillName}</span>
                <span>{serviceIcon}</span>
            </div>
            <div className="DescriptionOfService">
                <span>{description}</span>
            </div>
        </div>
    )

}

export default ServiceItem;