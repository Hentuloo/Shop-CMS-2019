import React from 'react';

const OrderDetails = ({ className, onClose }) => {
    return (
        <div className={`${className} text-white text-center`}>
            <button
                type="button"
                className="btn btn-info px-3 py-0 mt-2"
                onClick={onClose}
            >
                <span className="fa fa-angle-double-down h1 m-0" />
            </button>
            <div className="form-group mt-2 w-75 mx-auto">
                <label
                    className="mr-sm-2 sr-only"
                    htmlFor="inlineFormCustomSelect"
                >
                    Preference
                </label>
                <select className="custom-select" id="inlineFormCustomSelect">
                    <option value="1" selected="selected">
                        To send
                    </option>
                    <option value="2">Sented</option>
                    <option value="3">Delivered</option>
                </select>
                <p className="mt-2 mb-0 h3">Nazwa przedmiotu</p>
                <p className="mt-2 mb-0 h4">Amount: </p>
                <p className="mt-2 mb-0 h4">Address: </p>
                <p className="mt-2 mb-0 h5">Client comment: </p>
                <p className="mt-1 mb-0 p-2 h5 text-dark bg-light ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit a, cupiditate quia quisquam
                </p>
            </div>
        </div>
    );
};

export default OrderDetails;
