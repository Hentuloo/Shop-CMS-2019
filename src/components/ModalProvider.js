import React from 'react';
import styled from 'styled-components';

import Constants from 'config/Constants';

const ModalDialog = styled.div`
    max-width: 100%;
    top: 14%;
    border-width: 2px !important;
    @media ${({ theme }) => theme.mq.xs} and (orientation: landscape) {
        top: 1%;
    }
    @media ${({ theme }) => theme.mq.md} and (orientation: landscape) {
        top: 14%;
    }
    @media ${({ theme }) => theme.mq.md} {
        max-width: 60%;
        top: 2%;
    }
    @media ${({ theme }) => theme.mq.lg} {
        max-width: 650px;
    }
`;

const ModalProvider = ({
    active,
    target,
    title,
    children,
    className,
    onClose,
}) => {
    if (active) {
        return (
            <div
                className={`${className} ${
                    active ? 'd-block' : ''
                } modal fade show`}
                id={target}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={title}
                aria-hidden="true"
            >
                <ModalDialog
                    className="modal-dialog border border-light"
                    role="document"
                >
                    <div className="modal-content  bg-dark">
                        <div className="modal-body text-center">{children}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-info text-uppercase font-weight-bold"
                                data-dismiss="modal"
                                onClick={onClose}
                            >
                                {Constants.en.TEXT.close}
                            </button>
                        </div>
                    </div>
                </ModalDialog>
            </div>
        );
    }
    return null;
};

export default ModalProvider;
