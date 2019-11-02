import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Constants from 'config/Constants';

const ProductsStat = ({ className, products }) => {
  if (products.length) {
    return (
      <div className={`${className} card bg-light my-4`}>
        <div className="card-header">
          {Constants.en.TEXT.productStatus}
        </div>
        <ul className="list-group">
          {products.map(({ id, amount, name }) => (
            <li
              key={id}
              className="list-group-item d-flex align-items-center"
            >
              <h4 className="h5 font-weight-light my-0">{name}</h4>

              {Number(amount) === 0 && (
                <span className="badge badge-danger ml-2 ml-md-4 px-2 py-2">
                  {Constants.en.TEXT.emptyStatus}
                </span>
              )}
              {Number(amount) === 1 && (
                <span className="badge badge-warning ml-2 ml-md-4 px-2 py-2">
                  {Constants.en.TEXT.lastStatus}
                </span>
              )}
              {Number(amount) === 2 && (
                <span className="badge badge-warning ml-2 ml-md-4 px-2 py-2">
                  {Constants.en.TEXT.twoLastStatus}
                </span>
              )}

              <Link
                className="fa fa-pencil btn btn-outline-dark bg-white py-1 px-2 ml-auto text-dark"
                aria-hidden="true"
                to={`${Constants.en.PATHS.products.path}/${id}`}
              >
                <span className="absoluteHidden">
                  {Constants.en.TEXT.editItem}
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

ProductsStat.propTypes = {
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.array]),
};
ProductsStat.defaultProps = {
  className: '',
  products: null,
};

export default ProductsStat;
