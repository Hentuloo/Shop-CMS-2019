import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputWithLabel from 'components/InputWithLabel';
import Constants from 'config/Constants';

const Wrapper = styled.div`
  padding-top: 37px;
  @media ${({ theme }) => theme.mq.md} {
    padding: 30px 14px 10px !important;
  }
  @media ${({ theme }) => theme.mq.lg} {
    width: 90%;
    max-width: 800px;
    margin: 0px auto;
  }
`;

const FilterInput = ({ handleInput, inputValue, resetFilter }) => {
  return (
    <Wrapper className="px-1 pb-3">
      <div className="d-flex">
        <span
          className="fa fa-search rounded myColors-dark h5 text-white px-2 pb-2 pt-2 d-none d-md-block"
          aria-hidden="true"
        />
        <InputWithLabel
          className="mb-1 w-100 px-2 px-md-2"
          black
          placeholder={Constants.en.TEXT.productFilter}
          value={inputValue}
          name="filterValue"
          direction="fromTop"
          onChange={handleInput}
        />
        {true && (
          <button
            type="button"
            className="btn btn-info mx-1 mb-2 pt-2 pb-0"
            onClick={resetFilter}
          >
            <span className="fa fa-times h5" aria-hidden="true" />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

FilterInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default FilterInput;
