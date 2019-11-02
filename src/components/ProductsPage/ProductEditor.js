import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Constants from 'config/Constants';
import ImageController from './ImageController';

const TextareaGroup = styled.div`
  width: 80%;
  margin: 0px auto;
`;

class ProductEditor extends Component {
  state = {
    id: null,
    index: '',
    name: '',
    price: '',
    amount: 1,
    details: '',
    images: [],
  };

  componentDidUpdate(prevProps) {
    const prevActiveElement = prevProps.activeElement;

    const { activeElement: currentActiveElement } = this.props;

    if (prevActiveElement !== currentActiveElement) {
      if (currentActiveElement) {
        const {
          activeElement: {
            id,
            index,
            images,
            name,
            amount,
            price,
            details,
          },
        } = this.props;
        this.setState({
          id,
          index,
          name,
          amount,
          price,
          details,
          images,
        });
      } else {
        this.setState({
          id: null,
          index: '',
          name: '',
          price: '',
          amount: '',
          details: '',
          images: [],
        });
      }
    }
  }

  handleChangeValue = e => {
    const { value, name } = e.target;

    const { [name]: stateValue } = this.props;

    if (value !== stateValue) {
      this.setState({ [name]: value });
    }
  };

  handleSubmitAction = () => {
    const { submitAction } = this.props;
    const {
      id,
      index,
      name,
      amount,
      price,
      details,
      images,
    } = this.state;
    submitAction({
      id,
      index,
      images,
      name,
      amount,
      price,
      details,
    });
  };

  updateImage = images => {
    this.setState({ images });
  };

  render() {
    const { className, activeElement } = this.props;
    const {
      index,
      name,
      amount,
      price,
      details,
      images,
    } = this.state;
    return (
      <div
        className={`${className} text-white overflow-auto pb-5 pb-md-2`}
      >
        <ImageController
          updateImage={this.updateImage}
          images={images}
        />
        <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
          <label className="py-2" htmlFor="indexOfProducts">
            {Constants.en.TEXT.index}
          </label>
          <input
            name="index"
            min="1"
            max="999999"
            type="number"
            className="form-control number w-auto ml-2"
            id="indexOfProducts"
            value={index}
            onChange={this.handleChangeValue}
          />
        </div>
        <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
          <label className="py-2" htmlFor="nameOfProducts">
            {Constants.en.TEXT.name}
          </label>
          <input
            name="name"
            type="text"
            className="form-control w-auto ml-1"
            id="nameOfProducts"
            value={name}
            onChange={this.handleChangeValue}
          />
        </div>
        <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
          <label className="py-2" htmlFor="priceOfProduct">
            {Constants.en.TEXT.price}
          </label>
          <input
            name="price"
            min="1"
            step="any"
            type="number"
            className="form-control number w-auto ml-2"
            id="priceOfProduct"
            value={price}
            onChange={this.handleChangeValue}
          />
          <span className="py-2">
            {Constants.en.TEXT.monetaryType}
          </span>
        </div>
        <div className="form-group p-0 my-1 d-flex text-center justify-content-center">
          <label className="py-2" htmlFor="AmountOfProducts">
            {Constants.en.TEXT.Amount}
          </label>
          <input
            name="amount"
            min="1"
            max="999999"
            type="number"
            className="form-control number w-auto ml-2"
            id="AmountOfProducts"
            value={amount}
            onChange={this.handleChangeValue}
          />
        </div>
        <TextareaGroup className="form-group">
          <label htmlFor="textareaDetails">
            {Constants.en.TEXT.Details}
          </label>
          <textarea
            name="details"
            className="form-control"
            id="textareaDetails"
            rows="3"
            value={details}
            onChange={this.handleChangeValue}
          />
        </TextareaGroup>
        <button
          type="button"
          className="btn btn-info d-block mx-auto mt-3 py-2 px-4"
          onClick={this.handleSubmitAction}
        >
          {activeElement === undefined
            ? Constants.en.TEXT.buttonNew
            : Constants.en.TEXT.buttonEdit}
        </button>
      </div>
    );
  }
}

ProductEditor.propTypes = {
  className: PropTypes.string,
  activeElement: PropTypes.oneOfType([PropTypes.object]),
  submitAction: PropTypes.func.isRequired,
};
ProductEditor.defaultProps = {
  className: '',
  activeElement: undefined,
};

export default ProductEditor;
