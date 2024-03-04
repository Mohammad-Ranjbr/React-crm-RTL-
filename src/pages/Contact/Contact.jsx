import Table from "../../components/table/Table";
import customerList from "../../assets/JsonData/customers-list.json";
import React, {useState} from "react";
import './Contact.css'
import '../../assets/css/grid.css'
import Modal from '../../components/Modal/CustomModal'; // Import the Modal component

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const toggleModal=()=>{

    }
    const renderBody = (item, index) => (// <tr key={index}>
        //     <td>{item.id}</td>
        //     <td>{item.name}</td>
        //     <td>{item.email}</td>
        //     <td>{item.phone}</td>
        //     <td>{item.total_orders}</td>
        //     <td>{item.total_spend}</td>
        //     <td>{item.location}</td>
        // </tr>

        <div className="card">
            <div className="row">
                <div className="col-9">
                    <div>{item.name}</div>

                </div>

                <div className="col-3">
                    <div>

                        <button onClick={openModal} className="btn" >
                        <span className="bx bxs-phone-call "></span>
                        </button>
                        {/* Render the Modal component */}
                        <Modal showModal={showModal} closeModal={closeModal} />
                    </div>
                </div>
            </div>

        </div>


    )
    return (<div>
        <h2 className="page-header">
            دفترچه تلفن
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <Table
                            limit='10'
                            bodyData={customerList}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Contact;