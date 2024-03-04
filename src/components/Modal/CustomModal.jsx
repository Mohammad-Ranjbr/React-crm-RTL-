import React, { useState } from 'react';
import './Modal.css'; // استایل‌های مورد نیاز برای مودال

const CustomModal   = ({ showModal, closeModal }) => {
    // State to manage the content of the modal
    const [content, setContent] = useState('');

    // Function to handle changes in the input field
    const handleChange = (e) => {
        setContent(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can do something with the content, like submitting it to a server
        console.log('Submitted:', content);
        // Close the modal
        closeModal();
    };

    // Render the modal only if showModal is true
    return showModal ? (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Modal Title</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={content}
                        onChange={handleChange}
                        placeholder="Enter something..."
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    ) : null;
};

export default CustomModal;