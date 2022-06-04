import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:100px;
  z-index: 101;
  cursor:pointer;
  position:absolute;

  ${(props) => {
    switch (props.position) {
        case 'top right':
            return css`
          top: 24px;
          right: 24px;
        `;
        default:
            return css`
          top: 24px;
          left: 50%;
          right: auto;
          transform: translateX(-50%);
        `;
    }
}};

  ${(props) => props.currentIndex
    && css`
        top: calc(50px * (${props.currentIndex} + 1));
    `};
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  height: 64px;
  padding: 0 34px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #ccc;
  background-color: white;

  ${(props) => {
    switch (props.mode) {
        case 'error':
            return css`
          color: #ea3d53;
          border: solid 2px #ea3d53;
        `;
        case 'info':
            return css`
          color: #00d9b0;
          border: solid 2px #00d9b0;
        `;
        default:
            return css`
          border: 2px solid #ccc;
          color: rgba(0, 0, 0, 0.54);
        `;
    }
}};
`;

export { StyledContainer, StyledContent };