import EmailIcon from '../../icons/EmailIcon';
import '../../styles/ContactButton.css';
export default function ContactButton() {
    const handleContactClick = () => {
        window.location.hash = '#contacto';
    };

    return (
        <>
            <button className="btn-outline" onClick={handleContactClick}>
                <span>Contáctanos</span>
                <EmailIcon className="icon" />
            </button>


        </>


    );
}