import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { PropTypes } from 'prop-types';

const directions = css`
  ${({ direction }) => {
    if (direction === 'fromTop') {
      return css`
        transform: translate(-10px, -37px);
      `;
    }
    if (direction === 'fromLeft') {
      return css`
        transform: translate(-120%, 0px);
      `;
    }
    return null;
  }}
`;

const pseudoElementWrapper = css`
  position: absolute;
  display: flex;
  width: calc(100% - 23px);
  height: 40px;
  top: 50%;
  margin-left: 13px;
  line-height: 40px;
  transform: translateY(-22px);
  pointer-events: none;
`;

const pseudoElementWithText = css`
  content: ${({ placeholder }) => `"${placeholder}"` || ''};
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0%;
  top: 0%;
  padding-left: 3px;
  font-size: 18px;
  transition: transform 0.6s cubic-bezier(0.75, 0.335, 0.12, 0.725);
`;

const LabelWrapper = styled.label`
  position: relative;
  display: block;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  cursor: auto;
  margin: 0px;
`;
const Input = styled.input`
  height: 40px;
  padding-left: 13px;
  z-index: 2;
  border: none;
  &::placeholder {
    visibility: hidden;
  }

  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) =>
        theme.color.darken} !important;
      &:focus {
        background-color: ${({ theme }) =>
          theme.color.darken} !important;
      }
    `}
`;

const OutherPlaceholder = styled.div`
  ${pseudoElementWrapper}
  z-index: 1;

  &::after {
    ${pseudoElementWithText}
    color:white;

    ${({ isFocused }) => isFocused && directions};
    ${({ black }) =>
      black &&
      css`
        color: black;
      `}
  }
`;
const InnerPlaceholder = styled.div`
  ${pseudoElementWrapper}
  overflow: hidden;
  z-index: 3;

  &::after {
    ${pseudoElementWithText}
    color:black;

    /* transform: translateY(-38px); */
    ${({ isFocused }) => isFocused && directions}
    ${({ black }) =>
      black &&
      css`
        color: white;
      `}
  }
`;

const InputWithLabel = ({
  className,
  placeholder,
  name,
  value,
  onChange,
  specialAttr,
  direction,
  type,
  black,
}) => {
  const [isFocused, setFocus] = useState(false);

  const inputRef = useRef(null);
  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener('focus', () => setFocus(true));
    input.addEventListener('focusout', () => setFocus(false));
    return () => {
      input.removeEventListener('focus', () => setFocus(true));
      input.removeEventListener('focusout', () => setFocus(false));
    };
  });

  const placeholdersAttr = {
    placeholder,
    direction,
    black,
    isFocused: isFocused || value,
  };

  return (
    <LabelWrapper className={className}>
      <Input
        ref={inputRef}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        black={black}
        {...specialAttr}
      />
      <OutherPlaceholder {...placeholdersAttr} />
      <InnerPlaceholder {...placeholdersAttr} />
    </LabelWrapper>
  );
};

InputWithLabel.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  direction: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  black: PropTypes.bool,
  specialAttr: PropTypes.oneOfType([PropTypes.object]),
};
InputWithLabel.defaultProps = {
  className: '',
  type: 'text',
  direction: 'fromLeft',
  name: '',
  placeholder: '',
  black: false,
  specialAttr: {},
};

export default InputWithLabel;
