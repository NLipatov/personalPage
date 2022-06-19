import "./Contacts.css";
import Declarator from "../ComponentDeclarator/Declarator";
import { faFacebook, faSkype, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    const telegramIcon = <FontAwesomeIcon icon={faTelegram} style={{fontSize: "43pt", color: "#229ED9"}}/>
    const skypeIcon = <FontAwesomeIcon icon={faSkype} style={{fontSize: "43pt", color: "#00aff0"}}/>
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "43pt", color: "#BC8CF2"}}/>
    return(
        <div className="Contacts">
            <Declarator
                DeclaratorValue={"Me"}
                DeclaratorName={"Contact"}
                ReverseDeclaration={true}/>
            <div className="ContactsGroup">
                <div className="ContactDeclaration">
                    <span>
                        Get in touch
                    </span>
                    <span>I am always open to job offers</span>
                    <span>Ready to relocate to almost any country in the world</span>
                </div>
                <div className="ContactItem">
                    <span>
                        Telegram:
                    </span>
                    <span>
                        {telegramIcon} <a href="https://t.me/threeDollarBill">@threeDollarBill</a>
                    </span>
                </div>
                <div className="ContactItem">
                    <span>
                        Skype:
                    </span>
                    <span>
                        {skypeIcon} <a href="https://join.skype.com/invite/MZ0cwkcYg9i7">Start a chat with me</a>
                    </span>
                </div>
                <div className="ContactItem">
                    <span>
                        Email:
                    </span>
                    <span>
                        {emailIcon} <a href="mailto:6stringsohei@gmail.com">Send me a mail</a>
                    </span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Contacts;