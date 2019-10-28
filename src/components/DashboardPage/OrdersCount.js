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
            <div className="card-header">Dziś: 21-10-1019</div>
            <div className="card-body px-2">
                <h3 className="card-title border-left border-width-3 border-primary h4 py-2 px-2">
                    Ilość zamówień
                </h3>
                <ul className="list-group active">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Do wysłania:
                        <span className="badge badge-primary badge-pill">
                            {lengths.toSend}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Oczekujące potwierdzenia:
                        <span className="badge badge-primary badge-pill">
                            {lengths.sended}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dostarczono(ten miesiąc):
                        <span className="badge badge-primary badge-pill">
                            {lengths.delivered}
                        </span>
                    </li>
                </ul>
                <Link
                    to={Constants.PATHS.orders.path}
                    className="btn btn-primary mt-3"
                >
                    Przejdź do zamówień
                </Link>
            </div>
        </div>
    );
};

export default OrdersCount;
