import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import LazyLoad from 'react-lazyload';
import Constants from 'config/Constants';
import ModalProvider from '../ModalProvider';

const Image = styled.img`
  width: 60px;
  @media ${({ theme }) => theme.mq.md} {
    width: 80px;
  }
  @media ${({ theme }) => theme.mq.lg} {
    width: auto;
    max-width: 120px;
  }
`;

class ProductsTable extends Component {
  state = {
    active: false,
    src: '',
    title: '',
    name: '',
  };

  handleOpenImageModal = ({ src, title, name }) => {
    this.setState({ src, title, name, active: true });
  };

  handleCloseModal = () => {
    this.setState({ active: false });
  };

  render() {
    const {
      className,
      onClickEditBtn,
      onClickDeleteBtn,
      products,
    } = this.props;
    const { active, src, title, name: modalName } = this.state;
    return (
      <>
        <table className={`${className} table table-striped mt-4`}>
          <thead>
            <tr>
              <th scope="col" className="px-0 px-md-3">
                {Constants.en.TEXT.collImage}
              </th>
              <th scope="col">{Constants.en.TEXT.collName}</th>
              <th scope="col" className="d-none d-md-table-cell">
                {Constants.en.TEXT.collPrice}
              </th>
              <th scope="col" className="d-none d-md-table-cell">
                {Constants.en.TEXT.collAmount}
              </th>
              <th scope="col" className="d-none d-lg-table-cell">
                {Constants.en.TEXT.collDescription}
              </th>
              <th scope="col" className="px-0 px-md-3">
                {Constants.en.TEXT.collOperations}
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({ id, images, name, amount, details, price }) => (
                <tr key={id}>
                  <td className="px-0 px-md-3">
                    <LazyLoad>
                      <Image
                        src={
                          (images.length > 0 && images[0].src) ||
                          Constants.en.DEFAULTS.img
                        }
                        alt={`obraz: ${images.length > 0 &&
                          images[0].title}`}
                        title={`${name}`}
                        className="img-thumbnail img-fluid align-middle cursor-pointer"
                        onClick={() =>
                          this.handleOpenImageModal({
                            src: images[0].src,
                            title: images[0].title,
                            name,
                          })}
                      />
                    </LazyLoad>
                  </td>
                  <td className="align-middle">{name}</td>
                  <td className="d-none d-md-table-cell align-middle">
                    {price}
                    {price && Constants.en.TEXT.monetaryType}
                  </td>
                  <td className="d-none d-md-table-cell align-middle">
                    {amount}
                  </td>
                  <td className="d-none d-lg-table-cell pr-lg-4">
                    {details}
                  </td>
                  <td className="row align-content-center align-middle p-1 p-md-2 p-lg-1 px-lg-0">
                    {onClickEditBtn && (
                      <button
                        type="button"
                        onClick={() => onClickEditBtn(id)}
                        className=" btn btn-info py-1 px-2 px-md-3 mx-1 my-2"
                      >
                        <span className="fa fa-pencil mt-1 h4" />
                      </button>
                    )}
                    {onClickDeleteBtn && (
                      <button
                        type="button"
                        onClick={() => onClickDeleteBtn(id)}
                        className=" btn btn-info py-1 px-2 px-md-3 mx-1 my-2"
                      >
                        <span className="fa fa-trash mt-1 h4" />
                      </button>
                    )}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <ModalProvider
          active={active}
          title={modalName}
          onClose={this.handleCloseModal}
          className=""
        >
          <img
            className="img-thumbnail mh-70 cursor-pointer"
            role="button"
            src={src || Constants.en.DEFAULTS.img}
            alt={title}
            onClick={this.handleCloseModal}
            onKeyDown={this.handleCloseModal}
          />
        </ModalProvider>
      </>
    );
  }
}

ProductsTable.propTypes = {
  onClickEditBtn: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.array]),
};
ProductsTable.defaultProps = {
  className: '',
  products: null,
};

export default ProductsTable;
