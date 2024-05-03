import { Link } from 'react-router-dom';

export default function ConfirmationPageContact() {
    return (
        <div id="confirmation">
            <h2>🎉 All set! 🎉</h2>
            <p>We’ll contact you via email or phone soon.</p>
            <Link to="/contact">Back</Link>
        </div>
    )
}