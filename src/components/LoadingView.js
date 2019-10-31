import React from 'react';
import styled, { keyframes } from 'styled-components';

import BasicPattern from 'components/patterns/BasicPattern';

const rotate = keyframes`
    0% {
    transform: rotate(0deg);
    }
    30%{
    transform: rotate(180deg);
    }
    50%{
    transform: rotate(180deg);
    }
    80%{
        transform: rotate(360deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;

const falling = keyframes`
    0% {
    transform: translate(-50%, 47px);
    }
    30%{
    transform: translate(-50%, 47px);
    }
    50%{
    transform: translate(-50%, 0px);
    }
    75%{
    transform: translate(-50%, 0px);
    }
    100% {
    transform: translate(-50%, 47px);
    }
`;
const Wrapper = styled.div`
    position: fixed;
    z-index: 20;
    &::after {
        content: '';
        position: fixed;
        left: 50%;
        top: 50%;
        box-shadow: 0px 0px 115px 82px white;
        transform: translate(-50%, -50%);
        z-index: 0;
    }
`;
const CenterBoxWrapper = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    font-size: 110px;
    text-align: center;
    z-index: 10;
`;

const IconsWrapper = styled.div`
    animation: ${rotate} 2.5s ease-in-out infinite;
    position: relative;
    width: 100%;
    height: 100%;
`;
const SmallIcon = styled.span`
    position: absolute;
    animation: ${falling} 2.5s ease-in-out infinite;
    font-size: 0.3em;
    font-weight: bold;
    transform: translate(-50%, 0px);
    top: 12px;
`;
const BigIcon = styled.span`
    position: absolute;
    left: 7px;
    top: -1px;
`;

const LoadingItem = ({ className }) => {
    return (
        <Wrapper>
            <BasicPattern />
            <CenterBoxWrapper>
                <IconsWrapper>
                    <BigIcon className={`fa fa-square-o`} aria-hidden="true" />
                    <SmallIcon
                        className={`fa fa-square-o`}
                        aria-hidden="true"
                    />
                </IconsWrapper>
            </CenterBoxWrapper>
        </Wrapper>
    );
};

export default LoadingItem;
