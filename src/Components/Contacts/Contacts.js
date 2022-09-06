import "./Contacts.css";
import Declarator from "../ComponentDeclarator/Declarator";
import { faSkype, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LogoItem from ".././SharedComponents/LogoLink/LogoLink";

const Contacts = () => {
    const telegramIcon = <FontAwesomeIcon icon={faTelegram} style={{fontSize: "43pt", color: "#229ED9"}}/>
    const skypeIcon = <FontAwesomeIcon icon={faSkype} style={{fontSize: "43pt", color: "#00aff0"}}/>
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "43pt", color: "#5b94ff"}}/>
    return(
        <div className="Contacts visual_component" id="contact">
            <Declarator
                DeclaratorValue={"Me"}
                DeclaratorName={"Contact"}
                ReverseDeclaration={true}/>
            <div className="ContactsGroup">
                <div className="ContactDeclaration">
                    <span>
                        Get in touch with me!
                    </span>
                    <span>I am always open to job offers</span>
                    <span>Ready to relocate to almost any country in the world</span>
                </div>
                <LogoItem 
                    icon={telegramIcon}
                    link={"https://t.me/threeDollarBill"}
                    linkText={"@threeDollarBill"}/>
                <LogoItem 
                    icon={skypeIcon}
                    link={"https://join.skype.com/invite/MZ0cwkcYg9i7"}
                    linkText={"Start a chat with me"}/>
                <LogoItem 
                    icon={emailIcon}
                    link={"mailto:6stringsohei@gmail.com"}
                    linkText={"Send me a mail"}
                    additionalDescription={"6stringsohei@gmail.com"}/>
            </div>
        </div>
    )
}

export default Contacts;