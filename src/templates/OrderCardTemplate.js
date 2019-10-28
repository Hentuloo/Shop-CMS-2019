import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-left: 3px;
`;

const OrderCardTemplate = ({ children, cardName, targetName }) => {
    return (
        <div className="card">
            <div
                className="card-header cursor-pointer"
                id="headingOne"
                data-toggle="collapse"
                data-target={`#${targetName}`}
                aria-controls={targetName}
            >
                <h2 className="mb-0">
                    <Button
                        className="btn btn-link border-left text-dark border-width-3 border-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#${targetName}`}
                        aria-expanded="true"
                        aria-controls={targetName}
                    >
                        {cardName}
                    </Button>
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
