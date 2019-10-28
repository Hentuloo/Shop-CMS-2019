import React from 'react';
import { Link } from 'react-router-dom';
import Constants from 'config/Constants';

const ProductsStat = ({ className, products }) => {
    if (products.length) {
        return (
            <div className={`${className} card bg-light my-4`}>
                <div className="card-header">Status produktów</div>
                <ul className="list-group">
                    {products.map(({ id, amount, name }) => (
                        <li key={id} className="list-group-item d-flex">
                            <h4 className="h5 font-weight-light my-0">
                                {name}
                            </h4>
                            <span className="badge badge-danger ml-3 py-2">
                                {amount === 0 && 'Empty'}
                                {amount === 1 && 'Last'}
                                {amount === 2 && '2-last'}
                            </span>
                            <Link
                                className="fa fa-pencil btn btn-outline-dark bg-white py-0 px-2 ml-auto text-dark"
                                aria-hidden="true"
                                to={`${Constants.PATHS.products.path}/${id}`}
                            >
                                <span className="absoluteHidden">
                                    Edytuj przedmiot:
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
};

export default ProductsStat;
