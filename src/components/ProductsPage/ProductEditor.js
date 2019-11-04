import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import validator from 'validator';

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
    amount: '1',
    details: '',
    images: [],
    valid: {
      flag: true,
      index: true,
      name: true,
      price: true,
      amount: true,
    },
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

    const {
      [name]: stateValue,
      valid: { flag },
    } = this.state;

    if (value !== stateValue) {
      // check valid flag
      if (flag === false) {
        return this.setState({
          [name]: value,
          valid: {
            flag: true,
            index: true,
            name: true,
            price: true,
            amount: true,
          },
        });
      }

      return this.setState({ [name]: value });
    }
    return null;
  };

  handleSubmitAction = () => {
    if (!this.checkValid(['index', 'name', 'price', 'amount']))
      return null;

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
    return submitAction({
      id,
      index,
      images,
      name,
      amount,
      price,
      details,
    });
  };

  checkValid = stateNames => {
    const { valid } = this.state;
    const newValidObj = valid;

    stateNames.forEach(name => {
      const { [name]: stateValue } = this.state;
      switch (name) {
        case 'index': {
          if (!validator.isInt(stateValue)) {
            newValidObj[name] = false;
            newValidObj.flag = false;
          }
          break;
        }
        case 'name': {
          if (!validator.isLength(stateValue, { min: 4, max: 30 })) {
            newValidObj[name] = false;
            newValidObj.flag = false;
          }
          break;
        }
        case 'price': {
          if (!validator.isFloat(stateValue)) {
            newValidObj[name] = false;
            newValidObj.flag = false;
          }
          break;
        }
        case 'amount': {
          if (!validator.isInt(stateValue)) {
            newValidObj[name] = false;
            newValidObj.flag = false;
          }
          break;
        }
        default:
          break;
      }
    });
    this.setState({ valid: newValidObj });
    return newValidObj.flag;
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
      valid,
    } = this.state;

    return (
      <div
        className={`${className} text-white overflow-auto pb-5 pb-md-2`}
      >
        <ImageController
          updateImage={this.updateImage}
          images={images}
        />
        <div className="form-group p-0 my-1 d-flex flex-wrap text-center justify-content-center py-2">
          <label className="pt-2" htmlFor="indexOfProducts">
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
          {!valid.index && (
            <small className="text-muted d-block w-100">
              Only integer values
            </small>
          )}
        </div>

        <div className="form-group p-0 my-1 d-flex flex-wrap text-center justify-content-center py-2">
          <label className="pt-2" htmlFor="nameOfProducts">
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
          {!valid.name && (
            <small className="text-muted d-block w-100">
              min: 4/chars, max: 30/chars
            </small>
          )}
        </div>
        <div className="form-group p-0 my-1 d-flex flex-wrap text-center justify-content-center py-2">
          <label className="pt-2" htmlFor="priceOfProduct">
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
          <span className="pt-2">
            {Constants.en.TEXT.monetaryType}
          </span>
          {!valid.price && (
            <small className="text-muted d-block w-100">
              Only decimal values
            </small>
          )}
        </div>
        <div className="form-group p-0 my-1 d-flex flex-wrap text-center justify-content-center">
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
          {!valid.amount && (
            <small className="text-muted d-block w-100">
              Only integer values
            </small>
          )}
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
