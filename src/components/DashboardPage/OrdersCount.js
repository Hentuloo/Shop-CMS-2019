import React from 'react';
import { Link } from 'react-router-dom';

import Constants from 'config/Constants';

const OrdersCount = ({ className }) => {
    return (
        <div className={`${className} card mt-3`}>
            <div className="card-header">Dziś: 21-10-1019</div>
            <div className="card-body px-2">
                <h5 className="card-title">Ilość zamówień:</h5>
                <ul className="list-group active">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Do wysłania:
                        <span className="badge badge-primary badge-pill">
                            14
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Oczekujące potwierdzenia:
                        <span className="badge badge-primary badge-pill">
                            2
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dostarczono(ten miesiąc):
                        <span className="badge badge-primary badge-pill">
                            1
                        </span>
                    </li>
                </ul>
                <Link
                    to={Constants.PATHS.orders}
                    className="btn btn-primary mt-3"
                >
                    Przejdź do zamówień
                </Link>
            </div>
        </div>
    );
};

export default OrdersCount;
