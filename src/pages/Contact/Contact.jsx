import Table from "../../components/table/Table";
import customerList from "../../assets/JsonData/customers-list.json";
import React from "react";
import   './Contact.css'

const renderBody = (item, index) => (
    // <tr key={index}>
    //     <td>{item.id}</td>
    //     <td>{item.name}</td>
    //     <td>{item.email}</td>
    //     <td>{item.phone}</td>
    //     <td>{item.total_orders}</td>
    //     <td>{item.total_spend}</td>
    //     <td>{item.location}</td>
    // </tr>

    <div className="card ">
    <span className="">
            <div className="">{item.name}</div>
        <div className="bx bxs-phone-call"> </div>
    </span>
    </div>
)
const Contact = () => {
    return (
        <div>
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
        </div>
    )
}
export default Contact;