import React from 'react';

const ServiceItem = ({serviceIcon, skillName}) => {
    return (
        <div>
            {skillName}
            {serviceIcon}
        </div>
    )

}

export default ServiceItem;