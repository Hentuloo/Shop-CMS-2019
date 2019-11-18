import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.mq.md} {
    margin: 0px auto;
    width: 90%;
    max-width: 800px;
  }
  & > .filter__item {
    flex-basis: 30%;
    flex-grow: 1;
    margin: 10px 8px;
    box-sizing: border-box;

    @media ${({ theme }) => theme.mq.md} {
      flex-basis: 20%;
    }
  }
`;

const TableSettings = ({ settings, onToggle }) => {
  const {
    image,
    name,
    price,
    amount,
    description,
    operations,
    last,
  } = settings;

  return (
    <Wrapper>
      <div className="filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={image}
          onChange={onToggle}
          name="image"
          className="custom-control-input bg-dark"
          id="imageFilter"
        />
        <label className="custom-control-label" htmlFor="imageFilter">
          {Constants.en.TEXT.productsTableSettings.image}
        </label>
      </div>
      <div className="filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={name}
          onChange={onToggle}
          name="name"
          className="custom-control-input bg-dark"
          id="nameFilter"
        />
        <label className="custom-control-label" htmlFor="nameFilter">
          {Constants.en.TEXT.productsTableSettings.name}
        </label>
      </div>
      <div className="d-none d-md-block filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={price}
          onChange={onToggle}
          name="price"
          className="custom-control-input bg-dark"
          id="PriceFilter"
        />
        <label className="custom-control-label" htmlFor="PriceFilter">
          {Constants.en.TEXT.productsTableSettings.price}
        </label>
      </div>
      <div className="d-none d-md-block filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={amount}
          onChange={onToggle}
          name="amount"
          className="custom-control-input bg-dark"
          id="AmountFilter"
        />
        <label
          className="custom-control-label"
          htmlFor="AmountFilter"
        >
          {Constants.en.TEXT.productsTableSettings.amount}
        </label>
      </div>
      <div className="d-none d-lg-block filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={description}
          onChange={onToggle}
          name="description"
          className="custom-control-input bg-dark"
          id="DescriptionFilter"
        />
        <label
          className="custom-control-label"
          htmlFor="DescriptionFilter"
        >
          {Constants.en.TEXT.productsTableSettings.description}
        </label>
      </div>
      <div className="filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={operations}
          onChange={onToggle}
          name="operations"
          className="custom-control-input bg-dark"
          id="operationsfilter"
        />
        <label
          className="custom-control-label"
          htmlFor="operationsfilter"
        >
          {Constants.en.TEXT.productsTableSettings.operations}
        </label>
      </div>
      <div className="filter__item custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={last}
          onChange={onToggle}
          name="last"
          className="custom-control-input bg-dark"
          id="lastsfilter"
        />
        <label className="custom-control-label" htmlFor="lastsfilter">
          {Constants.en.TEXT.productsTableSettings.filter}
        </label>
      </div>
    </Wrapper>
  );
};
TableSettings.propTypes = {
  settings: PropTypes.shape({
    image: PropTypes.bool,
    name: PropTypes.bool,
    price: PropTypes.bool,
    amount: PropTypes.bool,
    description: PropTypes.bool,
    operations: PropTypes.bool,
    last: PropTypes.bool,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TableSettings;
