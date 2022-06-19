import "./ContactItem.css";

const ContactItem = ({icon, link, linkText, additionalDescription}) => {
    return (
        <div className="ContactItem">
            <span className="ContactLogo">
                {icon}
            </span>
            <div className="ContactItemInfo">
                <a href={link}>
                    {linkText}
                </a>
                <span>
                    {additionalDescription}
                </span>
            </div>
        </div>
    )
}

export default ContactItem;