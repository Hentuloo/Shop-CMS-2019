import React from 'react';

const OrdersTable = ({ clickDetailsButton, type, items }) => {
    return (
        <table className="table">
            <thead className="bg-light">
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Send details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>
                        <button
                            onClick={() => clickDetailsButton(1)}
                            className=" btn btn-info py-0 px-2"
                        >
                            <span className="fa fa-address-card mt-1 h4" />
                        </button>
                    </td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>
                        <button
                            onClick={() => clickDetailsButton(2)}
                            className=" btn btn-info py-0 px-2"
                        >
                            <span className="fa fa-address-card mt-1 h4" />
                        </button>
                    </td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>
                        <button
                            onClick={() => clickDetailsButton(3)}
                            className=" btn btn-info py-0 px-2"
                        >
                            <span className="fa fa-address-card mt-1 h4" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OrdersTable;

//  <button className=" btn btn-info py-0 px-2">
// <span className="fa fa-address-card mt-1 h4" />
// </button>
// <span className="fa fa-question bg-warning py-1 px-3 mt-0 h3 rounded" />

// <span className="fa fa-check bg-success py-1 px-2 mt-0 h3 rounded" />

// <span className="fa fa-exclamation bg-danger py-1 px-3 mt-0 h3 rounded" />
