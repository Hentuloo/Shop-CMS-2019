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
                        <li
                            key={id}
                            className="list-group-item d-flex align-items-center"
                        >
                            <h4 className="h5 font-weight-light my-0">
                                {name}
                            </h4>

                            {amount === 0 && (
                                <span className="badge badge-danger ml-2 ml-md-4 px-2 py-2">
                                    Empty
                                </span>
                            )}
                            {amount === 1 && (
                                <span className="badge badge-warning ml-2 ml-md-4 px-2 py-2">
                                    Last
                                </span>
                            )}
                            {amount === 2 && (
                                <span className="badge badge-warning ml-2 ml-md-4 px-2 py-2">
                                    2-last
                                </span>
                            )}

                            <Link
                                className="fa fa-pencil btn btn-outline-dark bg-white py-1 px-2 ml-auto text-dark"
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
