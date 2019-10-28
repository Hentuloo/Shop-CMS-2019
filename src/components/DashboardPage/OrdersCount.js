import React from 'react';
import { Link } from 'react-router-dom';

import Constants from 'config/Constants';

const OrdersCount = ({ className, amountsOfOrders }) => {
    const lengths = {
        toSend: amountsOfOrders.filter(order => order.status === 1).length,
        sended: amountsOfOrders.filter(order => order.status === 2).length,
        delivered: amountsOfOrders.filter(order => order.status === 3).length,
    };
    return (
        <div className={`${className} card mt-3`}>
            <div className="card-header">
                {Constants.en.TEXT.today}
                {new Date().toISOString().substring(0, 10)}
            </div>
            <div className="card-body px-2">
                <h3 className="card-title border-left border-width-3 border-primary h4 py-2 px-2">
                    {Constants.en.TEXT.ordersNumber}
                </h3>
                <ul className="list-group active">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {Constants.en.TEXT.toSent}
                        <span className="badge badge-primary badge-pill">
                            {lengths.toSend}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {Constants.en.TEXT.pending}
                        <span className="badge badge-primary badge-pill">
                            {lengths.sended}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {Constants.en.TEXT.delivered}
                        <span className="badge badge-primary badge-pill">
                            {lengths.delivered}
                        </span>
                    </li>
                </ul>
                <Link
                    to={Constants.en.PATHS.orders.path}
                    className="btn btn-primary mt-3"
                >
                    {Constants.en.TEXT.goToOrdersButton}
                </Link>
            </div>
        </div>
    );
};

export default OrdersCount;
