import React from 'react';
import PropType from 'prop-types';
import Constants from 'config/Constants';

const Controlers = ({ onClickTableEdit, onClickNewItem }) => {
  return (
    <>
      <div className="row pt-3 mb-4 justify-items-center">
        <div className="col-6 col-md-6">
          <button
            onClick={onClickNewItem}
            type="button"
            className="btn bg-light d-flex flex-column align-items-center mx-auto w-100 h-100"
          >
            <span
              className="fa fa-plus display-1"
              aria-hidden="true"
            />
            <span>{Constants.en.TEXT.newProduct}</span>
          </button>
        </div>
        <div className="col-6 col-md-6 ">
          <button
            onClick={onClickTableEdit}
            type="button"
            className="btn bg-light d-flex flex-column align-items-center mx-auto w-100 h-100"
          >
            <span
              className="fa fa-sliders display-1"
              aria-hidden="true"
            />
            <span>{Constants.en.TEXT.filterSettings}</span>
          </button>
        </div>
      </div>
    </>
  );
};

Controlers.propTypes = {
  onClickTableEdit: PropType.func.isRequired,
  onClickNewItem: PropType.func.isRequired,
};

export default Controlers;
