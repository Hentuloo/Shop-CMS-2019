import React from 'react';

const RefferBlocks = ({ className }) => {
    return (
        <div className={`${className} my-4 row mx-2 text-center`}>
            <div className="col-6 ">
                <a href="#" className="btn bg-light mw-100">
                    <img
                        className="mw-100"
                        src=" https://unsplash.it/200/150"
                        alt="..."
                    />
                    <h5 className="card-title text-uppercase">Analytics</h5>
                </a>
            </div>
            <div className="col-6 ">
                <a href="#" className="btn bg-light mw-100">
                    <img
                        className="mw-100"
                        src=" https://unsplash.it/200/150"
                        alt="..."
                    />
                    <h5 className="card-title text-uppercase">Analytics</h5>
                </a>
            </div>
            <div className="col-6 ">
                <a href="#" className="btn bg-light mw-100">
                    <img
                        className="mw-100"
                        src=" https://unsplash.it/200/150"
                        alt="..."
                    />
                    <h5 className="card-title text-uppercase">Analytics</h5>
                </a>
            </div>
        </div>
    );
};

export default RefferBlocks;
