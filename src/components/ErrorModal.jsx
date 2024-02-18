


const ErrorModal = ({ error, onClose }) => {

    return (
        <div className="modal">
        <div className="modal-content">
            <h2>Error</h2>
            <p>{error}</p>
            <button onClick={onClose}>Close</button>
        </div>
        </div>
    );
}
    
export default ErrorModal;