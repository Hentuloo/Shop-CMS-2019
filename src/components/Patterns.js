import styled, { css } from 'styled-components';

const Pattern = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
  background-size: 300px;
`;

export const BasicPattern = styled(Pattern)`
  background-image: url('/images/patternImage1.png');
`;
export const SecondPatern = styled(Pattern)`
  background-image: url('/images/patternImage2.png');
`;

export const withBasicPatterm = css`
  background-image: url('/images/patternImage1.png');
`;
export const withBSecondPatern = css`
  background-image: url('/images/patternImage2.png');
`;
