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
                <h2>مشخصات تماس</h2>
                <form onSubmit={handleSubmit}>

                    <h6>شماره:</h6>
                    <h6>نوع شماره </h6>
                    <h6> گروه بندی</h6>
                 </form>
                <button className="button111 test" onClick={closeModal}>بستن</button>
            </div>
        </div>
    ) : null;
};

export default CustomModal;