import React from 'react';

const ProductsStat = ({ className }) => {
    return (
        <div className={`${className} card bg-light my-4`}>
            <div className="card-header">Status produktów</div>
            <ul className="list-group">
                <li className="list-group-item d-flex">
                    szczotka do zębów
                    <span className="badge badge-danger ml-3 py-2">Empty</span>
                    <button
                        type="button"
                        className="fa fa-times btn btn-outline-dark py-0 px-2 ml-auto"
                        aria-hidden="true"
                    />
                </li>
                <li className="list-group-item d-flex">
                    szczotka do zębów
                    <span className="badge badge-danger ml-3 py-2">Empty</span>
                    <button
                        type="button"
                        className="fa fa-times btn btn-outline-dark py-0 px-2 ml-auto"
                        aria-hidden="true"
                    />
                </li>
                <li className="list-group-item d-flex">
                    szczotka do zębów
                    <span className="badge badge-warning ml-3 py-2">last</span>
                    <button
                        type="button"
                        className="fa fa-times btn btn-outline-dark py-0 px-2 ml-auto"
                        aria-hidden="true"
                    />
                </li>
                <li className="list-group-item d-flex">
                    szczotka do zębów
                    <span className="badge badge-warning ml-3 py-2">
                        2-last
                    </span>
                    <button
                        type="button"
                        className="fa fa-times btn btn-outline-dark py-0 px-2 ml-auto"
                        aria-hidden="true"
                    />
                </li>
            </ul>
        </div>
    );
};

export default ProductsStat;
