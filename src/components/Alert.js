import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { closeAlert as closeAlertAction } from 'store/actions';

import Constants from 'config/Constants';

const Wrapper = styled.div`
  position: fixed;
  width: 90%;
  top: 15%;
  left: 50%;
  z-index: 20;
  transform: translateX(-50%);
  font-size: 23px;
  font-weight: bold;
  padding-right: 0rem;
  text-align: center;
  @media ${({ theme }) => theme.mq.md} {
    width: 40%;
    top: 2%;
    left: calc(50% + 130px);
    padding-right: 70px;
    font-size: 20px;
  }
  button {
    position: absolute;
    right: 0%;
    top: 0%;
    transform: translateY(-100%);
    padding: 0px 15px;
    opacity: 1;
    font-size: 30px;
    @media ${({ theme }) => theme.mq.md} {
      transform: translate(0%, 0%);
    }
  }
`;

class Alert extends Component {
  state = {};

  handleCloseAlert = () => {
    const { closeAlert } = this.props;
    return closeAlert();
  };

  render() {
    const { generalState } = this.props;
    const { alertActive, alertType } = generalState;

    if (alertActive) {
      const { type, text } = Constants.en.ALERTS[alertType];
      if (type) {
        return (
          <Wrapper
            className={`alert alert-${type} alert-dismissible fade show`}
            role="alert"
          >
            {text}
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.handleCloseAlert}
            >
              <span aria-hidden="true" className="fa fa-times" />
            </button>
          </Wrapper>
        );
      }
    }
    return null;
  }
}
const mapStateToProps = ({ General }) => ({
  generalState: General,
});

const mapDispatchToProps = {
  closeAlert: closeAlertAction,
};

Alert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  generalState: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
