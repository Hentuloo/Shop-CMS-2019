import React from 'react';

const OrderCardTemplate = ({ children, cardName, targetName }) => {
    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#${targetName}`}
                        aria-expanded="true"
                        aria-controls={targetName}
                    >
                        {cardName}
                    </button>
                </h2>
            </div>

            <div
                id={targetName}
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
            >
                <div className="card-body p-0">{children}</div>
            </div>
        </div>
    );
};

export default OrderCardTemplate;
