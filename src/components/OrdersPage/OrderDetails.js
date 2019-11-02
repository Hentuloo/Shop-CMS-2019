import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import moment from 'moment';

import Constants from 'config/Constants';
import ModalProvider from 'components/ModalProvider';

const ImagesWrapper = styled.div`
  display: grid;
  width: 93%;
  margin: 0px auto;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 15px;
  @media ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px auto;
  cursor: pointer;
  @media ${({ theme }) => theme.mq.md} {
    height: 140px;
  }
  img {
    max-width: 100%;
    min-width: 100px;
    max-height: 100%;
    min-height: 60px;
  }
`;
class OrderDetails extends Component {
  state = {
    status: '',
    activeImgModal: {
      status: false,
      src: '',
      title: '',
    },
  };

  componentDidMount() {
    const { data } = this.props;
    const { status } = data;

    this.setState({ status });
  }

  static getDerivedStateFromProps(nextProps) {
    const { status } = nextProps.data;

    return { status };
  }

  handleOpenImageModal = (src, title) => {
    this.setState({
      activeImgModal: {
        status: true,
        src,
        title,
      },
    });
  };

  handleImageModalClose = () => {
    this.setState({
      activeImgModal: {
        status: false,
        src: '',
        title: '',
      },
    });
  };

  handleChangeValue = (e, id) => {
    const { onChangeStatus } = this.props;
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
    return onChangeStatus({ status: Number(value), id });
  };

  render() {
    const { className, onClose, data } = this.props;
    const {
      status,
      activeImgModal: {
        status: modalStatus,
        src: modalSrc,
        title: modalTitle,
      },
    } = this.state;

    const {
      products,
      id,
      address,
      clientComment,
      date,
      email,
    } = data;

    return (
      <>
        <div
          className={`${className} text-white text-center overflow-auto`}
        >
          <button
            type="button"
            className="btn btn-info px-3 py-0 mt-2"
            onClick={onClose}
          >
            <span className="fa fa-angle-double-down h1 m-0" />
          </button>
          <ImagesWrapper>
            {products &&
              products.map(
                ({ id: productId, image: { src, title } }) => (
                  <ImageWrapper
                    role="button"
                    key={productId}
                    onClick={() =>
                      this.handleOpenImageModal(src, title)
                    }
                  >
                    <img
                      className="img-thumbnail"
                      src={src || Constants.en.DEFAULTS.img}
                      alt={title}
                    />
                  </ImageWrapper>
                ),
              )}
          </ImagesWrapper>
          <div className="form-group mt-2 w-75 mx-auto">
            <ol>
              {products &&
                products.map(({ id: productID, name, amount }) => (
                  <li key={productID}>
                    {`${name} `}
                    <span className="font-weight-bold">{`Pieces: ${amount}`}</span>
                  </li>
                ))}
            </ol>
            <label
              className="mr-sm-2 sr-only"
              htmlFor="inlineFormCustomSelect"
            >
              {Constants.en.TEXT.preference}
            </label>
            <select
              name="status"
              value={status}
              className="custom-select"
              id="inlineFormCustomSelect"
              onChange={target => this.handleChangeValue(target, id)}
            >
              <option value="1">{Constants.en.TEXT.toSent}</option>
              <option value="2">{Constants.en.TEXT.sented}</option>
              <option value="3">{Constants.en.TEXT.delivered}</option>
            </select>
            <p className="mt-4 mb-0 h4">{address} </p>
            <p className="mt-3 mb-0 h5 text-break">{email} </p>
            <p className="mt-4 mb-0 h5">
              {Constants.en.TEXT.clientComment}
            </p>
            <p className="mt-1 mb-0 p-2 h5 text-dark bg-light">
              {clientComment}
            </p>
            <p className="mt-2 mb-0 h5">
              {moment(date.data).calendar()}
            </p>
          </div>
        </div>
        <ModalProvider
          active={modalStatus}
          target="imageModal"
          title={modalTitle}
          onClose={this.handleImageModalClose}
          className=""
        >
          <img
            className="img-thumbnail mh-70 cursor-pointer"
            role="button"
            src={modalSrc || Constants.en.DEFAULTS.img}
            alt={modalTitle}
            onClick={this.handleImageModalClose}
            onKeyDown={this.handleImageModalClose}
          />
        </ModalProvider>
      </>
    );
  }
}

OrderDetails.propTypes = {
  onChangeStatus: PropTypes.func.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]),
};

OrderDetails.defaultProps = {
  className: '',
  data: null,
};

export default OrderDetails;
