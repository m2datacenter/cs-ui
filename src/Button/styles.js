import styled, { css } from 'styled-components';

const Container = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) => props.margin && css`margin-bottom: 10px;`}

  ${(props) => props.color === 'success' && css`
    background-color: ${props.theme.palette.success.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.color === 'error' && css`
    background-color: ${props.theme.palette.error.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.color === 'info' && css`
    background-color: ${props.theme.palette.info.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.color === 'primary' && css`
    background-color: ${props.theme.palette.primary.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.color === 'secundary' && css`
    background-color: ${props.theme.palette.secundary.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.color === 'warning' && css`
    background-color: ${props.theme.palette.warning.main};
    color: ${props.theme.palette.default.light};
  `}

  ${(props) => props.fullWidth && css`
    display: block;
    width: 100%;
  `}

  &:hover {
    opacity: .8;
  }
`;

export default Container;
